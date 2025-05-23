import { FaCode, FaDownload } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className="w-full pb-20 pt-28">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       fixed top-0 left-0 flex items-center justify-center z-[-30]"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Where eCommerce Meets Momentum
          </p>
          <TextGenerateEffect
            words="Hey There!, I am Akash Sahani"
            className="text-center text-[50px] md:text-5xl lg:text-8xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Certified Magento Expert & Full-Stack Developer
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <a href="#contact">
              <MagicButton
                title="Start a Project"
                icon={<FaCode />}
                position="right"
                otherClasses="bg-white !text-black text-bold"
              />
            </a>

            <a href="/files/Akash-Sahani-Resume.pdf" download="Akash-Sahani-Resume.pdf">
              <MagicButton
                title="Download Resume"
                icon={<FaDownload />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
