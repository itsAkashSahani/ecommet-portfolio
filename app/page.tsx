"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";

const Home = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav />
        <Hero />
        <AboutMe />
        <Services />
        <RecentProjects />
        <TechStack />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
