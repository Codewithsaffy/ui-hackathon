"use client";
import React, { useState } from "react";
import chatbotIcon from "@/public/icons/chatbot.png";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight, FaSpinner } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
import MarkdownRenderer from "../ui/Markdown";

interface IAgentOutput {
  products:
    | {
        _id: string;
        name: string;
        description: string;
        price: number;
        rating: number;
        prevPrice: number;
        image: string;
      }[]
    | [];
  response_message: string;
}
interface IChatResponse {
  data: IAgentOutput | string;
  status: "success" | "error";
}

interface IChat {
  role: "user" | "agent";
  content: string | IAgentOutput;
}

const Chatbot = () => {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [chat, setChat] = useState<IChat[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    try {
      e.preventDefault();
      // SET USERINPUT TO PERSIST DATA
      setChat((prev) => [...prev, { role: "user", content: userInput }]);
      setUserInput("");
      const res = await fetch("api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: userInput,
        }),
      });
      const result: IChatResponse = await res.json();
      if (result.status == "error") {
        setChat((prev) => [
          ...prev,
          { role: "agent", content: "An Error Occured" },
        ]);
      }
      setChat((prev) => [...prev, { role: "agent", content: result.data }]);

      console.log(result);
    } catch (error) {
      console.log(error);
      setChat([...chat, { role: "agent", content: "An Error Occured" }]);
    } finally {
      setLoading(false);
      console.log(chat);
    }
  };

  return (
    <section className="fixed flex flex-col bottom-4 right-8">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            className="h-[600px] relative w-[450px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 bg-white border-pink-200 border rounded-xl overflow-hidden flex flex-col"
          >
            <h2 className="text-xl font-bold jon text-center text-gray-800">
              Customer Support Agent
            </h2>

            {/* Chats Interface */}
            <div
              className=" flex-1 mt-8 overflow-y-auto 
              
    scrollbar-hide flex flex-col gap-2"
            >
              {chat.map((c, i) => (
                <div
                  key={i}
                  className={` px-4 py-3 text-[14px] text-left t break-words ${
                    c.role === "user"
                      ? "bg-pink-700 max-w-[280px] rounded-l-2xl rounded-tr-3xl rounded-br-md text-white font-bold self-end ml-auto justify-self-end"
                      : "text-black self-start mr-auto mb-2"
                  }`}
                >
                  {c.role === "user" && (c.content as string)}
                  {c.role === "agent" && typeof c.content == "object" && (
                    <MarkdownRenderer markdown={c.content.response_message} />
                  )}
                  {c.role === "agent" &&
                    typeof c.content == "object" &&
                    c.content.products.length > 0 && (
                      <div className="w-full flex gap-4 mt-4 flex-col">
                        {c.content.products.map((item) => {
                          return (
                            <div
                              key={item._id}
                              className="flex items-center h-28 border  rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
                            >
                              {/* Image */}
                              <div className="flex-shrink-0 bg-white w-28 h-full relative border-r">
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  layout="fill"
                                  objectFit="cover"
                                />
                              </div>

                              {/* Content */}
                              <div className="p-2 flex-1">
                                <h2 className="text-lg jon font-semibold text-violet-950 truncate">
                                  {item.name}
                                </h2>
                                <p className="text-gray-600 line-clamp-2">
                                  {item.description}
                                </p>
                                <div className="mt-1 flex items-center justify-between text-xs">
                                  <span className="font-bold">
                                    ${item.price}
                                  </span>
                                  <span className="flex items-center text-yellow-500">
                                    {item.rating}
                                    <svg
                                      className="w-4 h-4 ml-0.5"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.363 1.118l1.287 3.97c.3.92-.755 1.688-1.54 1.118l-3.381-2.454a1 1 0 00-1.176 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 00-.363-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                     
                </div>
              ))}
              {isLoading && (
                <div className="px-4 py-2 self-start bg-gray-200 text-gray-800 rounded-r-2xl rounded-bl-3xl flex items-center gap-2 animate-pulse max-w-[200px]">
                  <FaSpinner className="animate-spin" />
                  <span>Typing...</span>
                </div>
              )}
            </div>

            {/* input */}
            <form onSubmit={(e) => handleSubmit(e)} className="mt-4">
              <div className="p-2 justify-between items-center flex h-12 rounded-full bg-violet-900">
                <input
                  type="text"
                  value={userInput}
                  placeholder="Enter your query..."
                  className="bg-transparent font-semibold outline-none p-2 w-full text-white"
                  onChange={(e) => setUserInput(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-violet-700 rounded-full flex-center p-3 text-white"
                >
                  <FaArrowRight />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BUTTON */}
      <motion.button
        onClick={() => SetIsOpen(!isOpen)}
        className="bg-pink-600 self-end h-12 w-12 rounded-full flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isOpen ? "close" : "open"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            {!isOpen ? (
              <Image className="w-6 h-6" src={chatbotIcon} alt="Chatbot Icon" />
            ) : (
              <IoIosArrowDown className="text-white w-6 h-6" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </section>
  );
};

export default Chatbot;
