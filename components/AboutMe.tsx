import React from "react";
import Image from "next/image";
import { motion } from "motion/react"

const AboutMe = () => {
  return (
    <section className="py-10 w-full" id="about">
      <header className="heading">
        <span className="text-white">About Me</span>
      </header>
      <div className="relative overflow-hidden p-[2px] my-10 bg-white dark:bg-black-100">
        {/* Moving conic gradient border */}
        <div className="absolute inset-[-150%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#030014_0%,#E2CBFF_100%)] z-0" />

        <div className="relative flex flex-col md:flex-row items-start w-full gap-5 lg:p-2 overflow-hidden bg-white dark:bg-black-100">
          {/* Left Column – Image */}
          <motion.div
            className="flex-shrink-0 w-full md:w-1/2 flex justify-center"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image
              src="/about.png"
              alt="About Me"
              className="rounded-xl shadow-lg"
              width={500}
              height={500}
            />
          </motion.div>

          {/* Right Column – Text Block with Animated Border */}
          <motion.div
            className="relative w-full md:w-1/2 p-1 rounded-xl overflow-hidden"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="relative z-10 bg-white dark:bg-black-100 p-5 md:p-6 rounded-xl text-black dark:text-white shadow-lg">
              <p className="leading-relaxed text-sm lg:text-lg text-justify">
                I&apos;m a <strong>Certified Adobe Commerce Developer</strong> with over 4 years of hands-on experience
                building high-conversion, scalable eCommerce solutions. I specialize in Magento customizations,
                Shopify app development, and modern headless architectures.
                <br /><br />
                Through my brand, <strong>Ecommet</strong>, I help ambitious businesses — from D2C startups to multi-vendor marketplaces —
                launch faster, perform better, and scale smarter. Every line of code I write is focused on real results:
                <strong> performance, conversions, and growth</strong>.
                <br /><br />
                If you&apos;re looking for someone who understands both the <strong>tech</strong> and the <strong>business of eCommerce</strong> — you&apos;re in the right place.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
