import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ShopifySolutions from "@/components/WebAndMobileApps";
import React from "react";

export default function MagentoSolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex justify-center items-center flex-col overflow-clip mx-auto">
        <ShopifySolutions />
      </main>
      <Footer />
    </>
  );
}
