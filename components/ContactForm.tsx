"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Form, FormField, FormControl, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { Button } from "./ui/button";

const contactFormSchema = z.object({
  name: z.string().trim().min(2, { message: "Please enter your name." }),

  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." }),

  mobile_number: z
    .string()
    .trim()
    .regex(/^\d{10}$/, {
      message: "Please enter a valid 10-digit mobile number.",
    }),

  message: z.string().trim().min(10, {
    message: "Please make sure your message is at least 10 characters long.",
  }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile_number: "",
      message: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    console.log("Response from server:", response);

    const result = await response.json();

    if (result?.success) {
      toast.success("Application Submitted Successfully.");
      form.reset();
    } else {
      toast.error(
        "Failed To send application. Please try again or contact us directly."
      );
    }
  };

  return (
    <section
      className="relative px-6 py-16 sm:py-20 w-full bg-gray-50"
      id="contact"
    >
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] z-[-10]" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10"
      >
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-900">
          Let&apos;s Connect
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-md mx-auto">
          Have a question or need a custom quote? Fill out the form below, and
          our team will get back to you shortly.
        </p>

        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="John Doe"
                      className="w-full rounded-lg border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-100 transition"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="john@example.com"
                      className="w-full rounded-lg border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-100 transition"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Mobile */}
            <FormField
              control={form.control}
              name="mobile_number"
              render={({ field }) => (
                <FormItem>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your 10-digit number"
                      className="w-full rounded-lg border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-100 transition"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Type your message here..."
                      rows={4}
                      maxLength={500}
                      minLength={10}
                      className="w-full rounded-lg border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-100 transition"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Form>
      </motion.div>
    </section>
  );
}
