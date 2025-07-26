// app/api/stream-products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Agent, run, tool } from "@openai/agents";
import { google } from "@ai-sdk/google";
import { aisdk } from "@openai/agents-extensions";
import { readFile } from "fs/promises";
import path from "path";
import { z } from "zod";
import { findProducts } from "@/lib/actions/searchProduct";

const model = aisdk(google("gemini-2.5-flash"));


const ResponseType = z.object({
  products: z.array(
    z.object({
      _id: z.string(),
      name: z.string(),
      description: z.string(),
      price: z.number(),
      rating: z.number(),
      prevPrice: z.number(),
      image: z.string(),
    })
  ),
  response_message: z.string(),
});


async function getSiteDocs() {
  const docsPath = path.join(process.cwd(), "site-docs.md");
  const content = await readFile(docsPath, "utf8");
  return content;
}

const readSiteDocs = tool({
  name: "read_site_docs",
  description:
    "Use this tool to retrieve general, non-product information about the Hecko website. This includes company policies like shipping and returns, working hours, or the 'About Us' page. The tool returns the information as a Markdown formatted string.",
  parameters: z.object({}),
  execute: async () => {
    console.log("TOOL CALLED: SITE");

    const result = await getSiteDocs();
    return result;
  },
});

const searchProduct = tool({
  name: "search_product",
  description:
    "Searches the product catalog. Filters by price, rating, sort order, and limits the number of results.",
  parameters: z.object({
    query: z.string().describe("Main search term, e.g. 'wireless headphones'"),
    minPrice: z
      .number()
      .describe(
        "Return products with price ≥ this value if not required so give max price 0"
      ),
    maxPrice: z
      .number()
      .describe(
        "Return products with price ≤ this value if not required so give max price 1000000"
      ),
    minRating: z
      .number()
      .describe(
        "Return products with rating ≥ this value if not required so give max price 0 "
      ),
    limit: z
      .number()
      .describe(
        "Maximum number of products to returnif not given so max is 3, "
      ),
  }),
  async execute({ query, minPrice, maxPrice, minRating, limit }) {
    console.log("TOOL CALLED: search_product");
    return await findProducts(
      query,
      minPrice,
      maxPrice,
      minRating,
      undefined,
      limit
    );
  },
});

export async function POST(req: NextRequest) {
  try {
    const { input } = await req.json();
    const customerSuportAgent = new Agent({
      name: "Customer Support Agent",
      instructions: `
    # Role:
    Act as expert customer support agent for heko ( a ecommerce website ) which help user about our website and also recommend products acc to user 

    # Instruction:
    You will guide user related our website like payment methods and every details related to our website by using a tool name **read_site_docs** and also if user want about our products and want best product for them so you will recommend them product through a tool name **search_product** also don't ans them related sensitive things like sexual and related questions 

    # Tool Details

    ## Available tools:
    - read_site_docs
    - search_product

    ### READ_SITE_DOCS:

    It have no parameter it will not take any parameter and it will return you about website docs in md format call this tool when need to know about contact information, patyment methods and all over things about website 

    ### SEARCH_PRODUCTS:

    It will take parameter search query which will find product using query in name of product and description of product

    # Format output
    \`\`\`json
    products: array(
    object({
      _id: string(),
      name: string(),
      description: string(),
      price: number(),
      rating: number(),
      prevPrice: number(),
      image: string(),
    })
  ),
  response_message: string().describe("in md file format"),
    \`\`\`
    
    - search_product : products which return by tool
    - respone_message: use md file format in response message detail of product if product wants user and also detail about our website and also casual messages

    # IMPORTANT NOTE:
    response_message type md format like We accept the following payment options: **Cash on Delivery (COD)**, **JazzCash**, **EasyPaisa**, **Bank Transfer**
    `,
      model,
      tools: [searchProduct, readSiteDocs],
    });

    const formatterAgent = new Agent({
      name: "Response Formatter",
      instructions: `Format the provided information into the required structure using provided output.
   # Format output
    \`\`\`json
    products: array(
    object({
      _id: string(),
      name: string(),
      description: string(),
      price: number(),
      rating: number(),
      prevPrice: number(),
      image: string(),
    })
  ),
  response_message: string().describe("in md file format"),
  # IMPORTANT NOTE:
    products: if product not provided so empty product [] and not give product or any detail by your self
    response_message type md format like We accept the following payment options: **Cash on Delivery (COD)**, **JazzCash**, **EasyPaisa**, **Bank Transfer**
  `,
      model,
      outputType: ResponseType, // Now we can use structured output
      // NO tools here
    });

    const runAgent = await run(customerSuportAgent, input);

    const result = await run(formatterAgent, `${runAgent.finalOutput}`);
    return NextResponse.json({
      status: "success",
      data: result.finalOutput,
    });
  } catch (error) {
    return NextResponse.json({
      data: error instanceof Error ? error.message : String(error),
      status: "error",
    });
  }
}
