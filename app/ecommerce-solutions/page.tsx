import Footer from "@/components/Footer";
import EcommerceSolutions from "@/components/EcommerceSolutions";
import Navbar from "@/components/Navbar";
import React from "react";

export default function EcommerceSolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex justify-center items-center flex-col overflow-clip mx-auto">
        <EcommerceSolutions />
      </main>
      <Footer />
    </>
  );
}
