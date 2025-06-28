import React from "react";
import {
  Briefcase,
  Users,
  Book,
  Settings,
  FileText,
  ClipboardList,
  LifeBuoy,
  Zap,
} from "lucide-react";

const solutions = [
  {
    icon: <Briefcase className="h-8 w-8 text-blue-600" />,
    title: "Customer Relationship Management (CRM)",
    description:
      "Streamline your sales, marketing, and customer support workflows with custom CRM solutions built around your business processes.",
  },
  {
    icon: <Users className="h-8 w-8 text-green-600" />,
    title: "Human Resource Management (HRMS)",
    description:
      "Simplify HR processes with solutions for employee onboarding, leave management, payroll, performance reviews, and more.",
  },
  {
    icon: <Book className="h-8 w-8 text-purple-600" />,
    title: "Learning Management Systems (LMS)",
    description:
      "Deliver and track training programs with interactive, scalable learning management platforms tailored to your organization.",
  },
  {
    icon: <ClipboardList className="h-8 w-8 text-yellow-600" />,
    title: "Project Management Software",
    description:
      "Plan, execute, and monitor projects efficiently with custom tools for resource planning, task assignment, and reporting.",
  },
  {
    icon: <FileText className="h-8 w-8 text-red-600" />,
    title: "Document Management Systems",
    description:
      "Organize, store, and retrieve critical documents securely with robust document management solutions.",
  },
  {
    icon: <Settings className="h-8 w-8 text-pink-600" />,
    title: "Custom Business Applications",
    description:
      "Automate complex workflows, integrate your systems, and solve unique operational challenges with custom-built business applications.",
  },
];

const services = [
  {
    icon: <LifeBuoy className="h-8 w-8 text-indigo-600" />,
    title: "Consulting & Strategy",
    description:
      "Our experts help you analyze, plan, and design business software that aligns with your long-term goals and growth strategy.",
  },
  {
    icon: <Settings className="h-8 w-8 text-blue-600" />,
    title: "Implementation & Customization",
    description:
      "From deployment to fine-tuning, we ensure your business software is implemented with features that match your exact requirements.",
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    title: "Integration Services",
    description:
      "Connect your CRM, HRMS, LMS, or management platforms with ERPs, payment systems, and third-party tools for seamless operations.",
  },
  {
    icon: <LifeBuoy className="h-8 w-8 text-pink-600" />,
    title: "Support & Maintenance",
    description:
      "We provide regular updates, security fixes, and proactive monitoring to keep your business software running without interruptions.",
  },
];

const BusinessSoftware = () => {
  return (
    <section
      className="relative sm:p-10 px-6 py-10 w-full"
      id="business-software"
    >
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] z-[-10]"></div>

      {/* Hero */}
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Business Software Solutions
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          From CRMs to HRMS, LMS platforms to project management tools, we help
          businesses transform their operations with reliable, scalable software
          solutions tailored to their needs.
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
          Talk to Our Business Software Experts
        </a>
      </div>
    </section>
  );
};

export default BusinessSoftware;
