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
    <section className="relative sm:p-10 px-6 py-10 w-full" id="projects">
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] z-[-10]"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          Let&apos;s Connect
        </h2>

        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Name
              </label>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <FormField
                control={form.control}
                name="mobile_number"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your mobile number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Message
              </label>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Type your message here..."
                        rows={4}
                        maxLength={500}
                        minLength={10}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
              disabled={isLoading}
            >
              {isLoading ? "Sending....." : "Send Message"}
            </Button>
          </form>
        </Form>
      </motion.div>
    </section>
  );
}
