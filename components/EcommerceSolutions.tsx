import React from "react";
// import Image from "next/image";
import {
  ShoppingCart,
  Plug,
  Zap,
  LifeBuoy,
  Repeat,
  GraduationCap,
  Globe,
} from "lucide-react";

const platforms = [
  {
    icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
    title: "Magento Solutions",
    description:
      "Enterprise-grade development, custom modules, integrations, and performance tuning for powerful Magento stores.",
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-green-600" />,
    title: "Shopify Solutions",
    description:
      "Launch and scale your Shopify store with custom themes, app development, and expert optimization.",
  },
  {
    icon: <Globe className="h-8 w-8 text-purple-600" />,
    title: "Custom eCommerce",
    description:
      "Tailored eCommerce platforms using Laravel, Next.js, Node.js, and headless architecture for unique business needs.",
  },
];

const services = [
  {
    icon: <Plug className="h-8 w-8 text-indigo-600" />,
    title: "Integrations",
    description:
      "Connect seamlessly with payment gateways, shipping providers, ERPs, CRMs, and marketing platforms.",
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    title: "Performance Optimization",
    description:
      "Improve speed, scalability, and user experience with advanced optimizations tailored for your platform.",
  },
  {
    icon: <LifeBuoy className="h-8 w-8 text-pink-600" />,
    title: "Support & Maintenance",
    description:
      "Ongoing care with regular updates, security patches, and 24/7 monitoring to keep your store running smoothly.",
  },
  {
    icon: <Repeat className="h-8 w-8 text-red-600" />,
    title: "Platform Migration",
    description:
      "Move to Magento, Shopify, or a custom platform with zero data loss, minimal downtime, and full SEO preservation.",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-teal-600" />,
    title: "Training & Workshops",
    description:
      "Get your team up to speed with personalized training on platform management, integrations, and best practices.",
  },
];

const EcommerceSolutions = () => {
  return (
    <section
      className="relative sm:p-10 px-6 py-10 w-full"
      id="ecommerce-solutions"
    >
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] z-[-10]"></div>

      {/* Hero */}
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Complete Ecommerce Solutions
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          We deliver tailored ecommerce development, integrations, and support
          for growing businesses. Whether you choose Magento, Shopify, or a
          custom platform, our solutions are built to scale with you.
        </p>
      </header>

      {/* Platforms */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-8">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="group relative p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="mb-4">{platform.icon}</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
              {platform.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {platform.description}
            </p>
          </div>
        ))}
      </div>

      {/* Services */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto py-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10">
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Let’s Build Your Ecommerce Success Story
        </a>
      </div>
    </section>
  );
};

export default EcommerceSolutions;
