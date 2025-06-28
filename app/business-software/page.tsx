import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BusinessSoftware from "@/components/BusinessSoftware";
import React from "react";

export default function MagentoSolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex justify-center items-center flex-col overflow-clip mx-auto">
        <BusinessSoftware />
      </main>
      <Footer />
    </>
  );
}
