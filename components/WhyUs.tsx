"use client";

import React from "react";
import { Rocket, Brush, Settings, Handshake } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

interface FeatureCardProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const FeatureCard = ({ Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition duration-300">
      <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-600 transition">
        <Icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
};

const WhyUs = () => {
  return (
    <section className="relative sm:p-10 px-6 py-10 w-full" id="why-us">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 my-10">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Ecommet?
          </h2>
          <p className="text-white text-lg mb-6">
            At Ecommet, we are passionate about helping businesses grow through
            powerful eCommerce and custom web solutions. As the founder, I bring
            years of hands-on experience, ensuring every project gets the
            attention it deserves.
          </p>
          <button className="px-6 py-3 bg-[#38BDF8] text-white rounded-lg shadow hover:bg-[#31b4ec] transition font-semibold">
            Let&apos;s Work Together
          </button>
        </div>

        {/* Right Section - Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FeatureCard
            Icon={Rocket}
            title="Growth Focused"
            description="We help you build platforms designed for rapid growth."
          />
          <FeatureCard
            Icon={Brush}
            title="Tailored Design"
            description="Custom designs crafted to reflect your brand and goals."
          />
          <FeatureCard
            Icon={Settings}
            title="Tech Expertise"
            description="Magento, Shopify, custom apps — fully optimized tech."
          />
          <FeatureCard
            Icon={Handshake}
            title="Partnership First"
            description="We work with you as partners, not just service providers."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
