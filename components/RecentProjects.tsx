"use client";

import { Carousel } from "@/components/ui/Carousel";

function RecentProjects() {
  const slideData = [
    {
      title: "Liskart — Genuine Automotive Spare Parts Marketplace",
      button: "Visit Website",
      url: "https://www.yves-rocher.com.sa/",
      src: "/projects/liskart.png",
    },
    {
      title: "Yves Rocher Saudi Arabia — Beauty and Fragrance Ecommerce Platform",
      button: "Visit Website",
      url: "https://www.yves-rocher.com.sa/",
      src: "/projects/albatool.png",
    },
    {
      title: "Gecko Jewellery — Luxury Ecommerce",
      button: "Visit Website",
      src: "/projects/gecko.png",
    },
    {
      title: "Accuride North Amarica — B2B Automotive Platform",
      button: "Visit Website",
      src: "/projects/accuride-na.png",
    },
    {
      title: "Spaces.in — Home Decor Platform",
      button: "Visit Website",
      url: "https://www.yves-rocher.com.sa/",
      src: "/projects/spaces.png",
    },
    {
      title: "Accuride Europe — B2B Automotive Platform",
      button: "Visit Website",
      src: "/projects/accuride-eu.png",
    },
    {
      title: "Allflex Global — Livestock Identification Services",
      button: "Visit Website",
      src: "/projects/allflex.png",
    },
  ];

  return (
    <section className="py-10 w-full" id="projects">
      <header className="heading">
        <span className="text-white">Recent Projects</span>
      </header>
      <div className="relative overflow-hidden w-full h-full py-20">
        <Carousel slides={slideData} />
      </div>
    </section>
  );
}

export default RecentProjects;
