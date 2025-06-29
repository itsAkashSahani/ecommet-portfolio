import { FaCode, FaFolder } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className="w-full py-44">
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

      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words={[
              {
                text: "Supercharge",
                highlight: true,
                className: "lg:text-[100px] md:text-[60px] text-[50px]",
              },
              { text: "Your eCommerce." },
              { text: "Without Limits." },
            ]}
            className="text-center text-[40px] md:text-5xl lg:text-7xl"
          />

          <p className="text-center md:tracking-wider m-4 text-sm md:text-lg lg:text-xl text-white">
            Ecommet is your growth partner for high-performance eCommerce,
            custom web platforms, and app development - tailored for startups,
            scaleups, and enterprise.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <a href="/contact-us">
              <MagicButton
                title="Start a Project"
                icon={<FaCode />}
                position="left"
                otherClasses="bg-white hover:bg-neutral-200 !text-black text-bold"
              />
            </a>

            <a href="/magento-extension-store">
              <MagicButton
                title="View Our Extensions"
                icon={<FaFolder />}
                position="left"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
