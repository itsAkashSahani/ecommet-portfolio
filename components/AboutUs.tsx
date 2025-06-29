import React from "react";
import Image from "next/image";
import {
  CheckCircle,
  Layers,
  ShoppingCart,
  Globe,
  Smartphone,
  MonitorSmartphone,
} from "lucide-react";

const features = [
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
    icon: <Globe className="h-8 w-8 text-purple" />,
    title: "Custom eCommerce",
    description:
      "Tailored eCommerce platforms using Laravel, Next.js, Node.js, and headless architecture for unique business needs.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-red-600" />,
    title: "Mobile App Development",
    description:
      "Design and build high-performance native or cross-platform mobile applications that deliver great experiences on iOS and Android devices.",
  },
  {
    icon: <MonitorSmartphone className="h-8 w-8 text-yellow-600" />,
    title: "Web Application Development",
    description:
      "Robust, scalable web apps built with modern frameworks to support complex business logic and seamless user interactions.",
  },
  {
    icon: <Layers className="h-8 w-8 text-gray-600" />,
    title: "Progressive Web Apps (PWAs)",
    description:
      "Combine the power of the web with the feel of native apps, offering offline capabilities and fast performance.",
  },
];

const AboutUs = () => {
  return (
    <section className="w-full">
      {/* HERO */}
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] z-[-10]"></div>

      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About Ecommet</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We don&apos;t just build websites: we engineer digital growth. With
            4+ years of experience, Ecommet empowers businesses with
            high-performance eCommerce platforms, web & mobile apps, and
            seamless integrations.
          </p>
        </div>
      </div>

      {/* WHO WE ARE */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="/team-at-work.jpg"
            alt="Our team at work"
            width={600}
            height={400}
            className="rounded-xl shadow"
            priority
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            At Ecommet, we combine strategy, creativity, and technology to
            deliver digital solutions that perform. From startups to
            enterprises, we help businesses achieve momentum with scalable,
            secure, and future-ready systems.
          </p>
          <p className="text-gray-700 mb-4">
            Our team is passionate about solving problems with innovative
            technology, ensuring every solution is robust and growth-focused.
          </p>
          <a
            href="#"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Work With Us
          </a>
        </div>
      </div>

      {/* WHAT WE DELIVER */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What We Deliver</h2>
          <p className="text-gray-600">
            Our services are engineered to scale, perform, and empower.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 shadow hover:shadow-md transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Why Choose Ecommet?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-600 h-5 w-5" />
              4+ years of eCommerce expertise
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-600 h-5 w-5" />
              Problem-solving, growth-oriented mindset
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-600 h-5 w-5" />
              High-quality, scalable, future-ready builds
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-600 h-5 w-5" />
              Transparent, collaborative project delivery
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-600 h-5 w-5" />
              Ongoing support and maintenance
            </li>
          </ul>
        </div>
        <div>
          <Image
            src="/ecommerce-development.webp"
            alt="Ecommet building growth"
            width={600}
            height={400}
            className="rounded-xl"
            priority
          />
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 text-white text-center py-12 px-4">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Accelerate Your Business?
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Let&apos;s collaborate to build scalable, secure, and high-performing
          solutions that make your business thrive.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 rounded bg-white text-blue-600 font-semibold hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
