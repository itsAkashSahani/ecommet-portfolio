"use client";

import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Navbar from "@/components/Navbar";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="relative flex justify-center items-center flex-col overflow-clip mx-auto">
        <Hero />
        <AboutMe />
        <Services />
        <RecentProjects />
        <WhyUs />
      </main>
      <Footer />
    </>
  );
};

export default Home;
