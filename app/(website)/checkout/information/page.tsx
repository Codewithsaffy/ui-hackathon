"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useShoppingCart } from "use-shopping-cart";
import axios from "axios";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";
import { useContext, useState } from "react";
import OrderContext from "@/provider/order/OrderContext";
import { Address } from "@/type";

const FormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  country: z.string().min(1, { message: "Please select a country." }),
  firstName: z.string().min(2, { message: "First name is too short." }).max(50),
  lastName: z.string().min(2, { message: "Last name is too short." }).max(50),
  address: z.string().min(2, { message: "Address is too short." }).max(100),
  city: z.string().min(2, { message: "City name is too short." }).max(50),
  postalCode: z
    .string()
    .min(2, { message: "Postal code is too short." })
    .max(10),
  state: z.string().toUpperCase().min(2).max(2),
  phoneNumber: z.string(),
});

export default function AddressComp() {
  // hooks
  // ========================
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { cartDetails, totalPrice } = useShoppingCart();
  const { order, setOrder } = useContext(OrderContext);
  // ========================

  const orderProducts = Object.values(cartDetails || {});
  console.log(order.address);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: order.address
      ? order.address
      : {
          email: "",
          country: "US",
          firstName: "",
          lastName: "",
          address: "1600 Pennsylvania Avenue NW",
          city: "Washington",
          postalCode: "20500",
          state: "DC",
          phoneNumber: "+1 555-678-1234",
        },
  });

  async function onSubmit(formData: z.infer<typeof FormSchema>) {
    setLoading(true);
    const shipeToAddress: Address = {
      name: `${formData.firstName} ${formData.lastName}`,
      phone: formData.phoneNumber,
      addressLine1: formData.address,
      addressLine2: "", // Optional
      cityLocality: formData.city,
      stateProvince: formData.state,
      postalCode: formData.postalCode,
      countryCode: "US",
      addressResidentialIndicator: "no", // 'no' means a commercial address
    };

    try {
      const packageOrder = orderProducts.map((product) => ({
        weight: product.shipment.weight,
        dimensions: product.shipment.dimensions,
      }));
      const response = await axios.post("/api/shipengine/get-rates", {
        shipeToAddress,
        packages: packageOrder,
      });
      if (response.data.rates.length < 0) {
        toast({
          description: "This order can't be shipped to your location",
        });
      } else {
        setOrder({
          ...order,
          address: formData,
          rates: response.data.rates,
          subTotal: totalPrice as number,
        });
        localStorage.setItem(
          "order",
          JSON.stringify({
            ...order,
            address: formData,
            rates: response.data.rates,
            subTotal: totalPrice,
          })
        );
        router.push("/checkout/shippment");
      }
    } catch (error) {
      console.log(error);
      toast({
        description: "Something went wrong",
      });
      setLoading(false);
      // console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" max-w-4xl w-full space-y-6 bg-white py-6 pr-10 pl-0"
        >
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="py-6" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="newsOffers" className="w-4 h-4" />
            <label htmlFor="newsOffers" className="text-sm">
              Email me with news and offers
            </label>
          </div>

          <h2 className="text-xl font-bold mt-6 mb-4">Delivery</h2>
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="py-6">
                      <SelectValue placeholder="Country/Region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="US">United States</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="py-6"
                      placeholder="First Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="py-6"
                      placeholder="Last Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="py-6" placeholder="Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="py-6" placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="py-6"
                      placeholder="Postal Code"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="py-6"
                      placeholder="State Code"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="py-6"
                    placeholder="Phone Number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="font-bold py-6">
            {loading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <span>{order.address ? "Update" : "Continue to shipping"}</span>
            ) }
          </Button>
        </form>
      </Form>
    </div>
  );
}
