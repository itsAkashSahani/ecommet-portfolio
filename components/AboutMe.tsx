import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ShoppingCart, Code, Smartphone, Cable, BarChart3 } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="relative sm:p-10 px-6 py-10 w-full" id="about">
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] z-[-10]"></div>
      <header className="heading">
        <span className="text-gray-900">About Ecommet</span>
      </header>
      <div className="max-w-7xl w-full overflow-hidden p-[2px] mx-auto mt-6">
        {/* Glass Morphism Blurred Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full backdrop-blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full backdrop-blur-2xl animate-pulse delay-200"></div>

        <div className="relative flex flex-col md:flex-row justify-center items-start w-full lg:gap-10 lg:p-2 overflow-hidden">
          {/* Left Column – Image */}
          <motion.div
            className="flex-shrink-0 w-full md:w-1/2 flex justify-center items-center"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image
              src="/ecommerce-development.webp"
              alt="About Us"
              className="rounded-xl"
              width={800}
              height={800}
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
            <div className="relative z-10 p-5 md:p-6 rounded-xl text-black">
              <div className="space-y-4 text-sm lg:text-lg leading-relaxed">
                <p>
                  At <strong>Ecommet</strong>, we don&apos;t just build websites
                  — we engineer digital growth. With over{" "}
                  <strong>4 years of experience</strong>, we specialize in
                  high-performance eCommerce solutions, custom web platforms,
                  and app development tailored for startups, scaleups, and
                  enterprises.
                </p>

                <p>
                  From <strong>Magento</strong> and <strong>Shopify</strong> to
                  complex <strong>ERP</strong> and
                  <strong> CRM integrations</strong>, we bring deep technical
                  expertise and a problem-solving mindset to every project. Our
                  solutions are built to{" "}
                  <em>scale, perform, and create momentum</em> for your
                  business.
                </p>

                <div>
                  <p className="font-semibold mb-2">What We Deliver:</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <ShoppingCart className="text-blue-600" size={18} />
                      <span>High-performance eCommerce platforms</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Code className="text-purple-600" size={18} />
                      <span>Custom web applications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Smartphone className="text-pink-600" size={18} />
                      <span>Mobile app development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Cable className="text-orange-600" size={18} />
                      <span>Seamless ERP and CRM integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BarChart3 className="text-green-600" size={18} />
                      <span>
                        Scalable solutions for startups to enterprises
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
