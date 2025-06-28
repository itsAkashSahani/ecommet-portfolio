"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

function RecentProjects() {
  const projects = [
    {
      title: "Liskart - Genuine Automotive Spare Parts Marketplace",
      button: "Visit Website",
      url: "https://liskart.com/",
      src: "/projects/liskart-full.png",
    },
    {
      title:
        "Yves Rocher Saudi Arabia - Beauty and Fragrance Ecommerce Platform",
      button: "Visit Website",
      url: "https://www.yves-rocher.com.sa/",
      src: "/projects/albatool-full.png",
    },
    {
      title: "Gecko Jewellery - Luxury Ecommerce",
      button: "Visit Website",
      url: "https://geckojewellery.com/",
      src: "/projects/gecko-full.png",
    },
    {
      title: "Accuride North Amarica - B2B Automotive Platform",
      button: "Visit Website",
      url: "https://www.accuride.com/",
      src: "/projects/accuride-na-full.png",
    },
    {
      title: "Spaces.in - Home Decor Platform",
      button: "Visit Website",
      url: "https://spaces.in/",
      src: "/projects/spaces-full.png",
    },
    {
      title: "Accuride Europe - B2B Automotive Platform",
      button: "Visit Website",
      url: "https://www.accuride-europe.com/en/",
      src: "/projects/accuride-eu-full.png",
    },
    // {
    //   title: "Allflex Global - Livestock Identification Services",
    //   button: "Visit Website",
    //   url: "https://www.allflex.global/",
    //   src: "/projects/allflex-full.png",
    // },
  ];

  return (
    <section className="relative sm:p-10 px-6 py-10 w-full" id="projects">
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] z-[-10]"></div>
      <header className="heading mb-2">
        <span className="text-gray-900">Our Orbit of Impactful Projects</span>
      </header>
      <div className="relative max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto py-14 px-5">
        <div className="absolute top-0 right-6 z-10 hidden md:block">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
            title="View All Projects"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.src}
            url={project.url}
          />
        ))}
      </div>

      <div className="text-center mt-2 md:hidden">
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          title="View All Projects"
        >
          View All Projects
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

const ProjectCard = ({
  title,
  image,
  url,
}: {
  title: string;
  image: string;
  url: string;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({
        top: el.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const handleMouseLeave = () => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md text-gray-900">
      <div
        className="h-[400px] overflow-hidden relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={scrollRef}
        style={{ scrollBehavior: "smooth" }}
      >
        <Image
          src={image}
          alt={title}
          width={600}
          height={1000}
          className="w-full object-top object-cover"
        />
      </div>
      <div className="p-2 border-t border-gray-200">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-lg text-center block mb-2 hover:underline"
          title={title}
        >
          {title}
        </a>
      </div>
    </div>
  );
};

export default RecentProjects;
