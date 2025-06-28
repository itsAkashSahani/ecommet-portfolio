import React from "react";
import {
  Smartphone,
  MonitorSmartphone,
  Plug,
  Zap,
  LifeBuoy,
  Layers,
  Globe,
} from "lucide-react";

const solutions = [
  {
    icon: <Smartphone className="h-8 w-8 text-green-600" />,
    title: "Mobile App Development",
    description:
      "Design and build high-performance native or cross-platform mobile applications that deliver great experiences on iOS and Android devices.",
  },
  {
    icon: <MonitorSmartphone className="h-8 w-8 text-blue-600" />,
    title: "Web Application Development",
    description:
      "Robust, scalable web apps built with modern frameworks to support complex business logic and seamless user interactions.",
  },
  {
    icon: <Layers className="h-8 w-8 text-purple-600" />,
    title: "Progressive Web Apps (PWAs)",
    description:
      "Combine the power of the web with the feel of native apps, offering offline capabilities and fast performance.",
  },
];

const services = [
  {
    icon: <Plug className="h-8 w-8 text-indigo-600" />,
    title: "API Integrations",
    description:
      "Connect your app with third-party services, payment gateways, CRMs, or ERPs for a unified business ecosystem.",
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    title: "Performance & Security Optimization",
    description:
      "Ensure smooth performance and secure data handling to protect your users and your business.",
  },
  {
    icon: <LifeBuoy className="h-8 w-8 text-pink-600" />,
    title: "Maintenance & Support",
    description:
      "Stay confident with continuous updates, feature enhancements, and bug fixes to keep your app future-ready.",
  },
  {
    icon: <Globe className="h-8 w-8 text-teal-600" />,
    title: "Cross-Platform Expertise",
    description:
      "One codebase, multiple platforms — build once, deploy across web, Android, and iOS with tools like React Native or Flutter.",
  },
];

const WebAndMobileApps = () => {
  return (
    <section
      className="relative sm:p-10 px-6 py-10 w-full"
      id="web-mobile-apps"
    >
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] z-[-10]"></div>

      {/* Hero */}
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Web & Mobile App Development
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Transform your ideas into powerful digital products with our expert
          web and mobile app development services. We deliver solutions that are
          modern, scalable, and future-ready.
        </p>
      </header>

      {/* Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-8">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="group relative p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="mb-4">{solution.icon}</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-700 transition-colors duration-300">
              {solution.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {solution.description}
            </p>
          </div>
        ))}
      </div>

      {/* Services */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Our Capabilities
        </h2>
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
          Discuss Your App Idea Today
        </a>
      </div>
    </section>
  );
};

export default WebAndMobileApps;
