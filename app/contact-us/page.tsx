import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import React from "react";

export default function MagentoExtensionStore() {
  return (
    <>
      <Navbar />
      <main className="relative flex justify-center items-center flex-col overflow-clip mx-auto">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
