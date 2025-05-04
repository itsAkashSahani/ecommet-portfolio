"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import {
  IconArrowWaveRightUp,
  IconCode,
  IconSettings,
  IconBook,
} from "@tabler/icons-react";
import Image from "next/image";

function Services() {
  return (
    <section className="py-10 w-full" id="services">
      <header className="heading">
        <span className="text-white">What I Can Help You Build</span>
      </header>
      <BentoGrid className="w-full mx-auto py-10">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            index={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const items = [
  {
    title: "Custom Magento Module Development",
    description: "Build robust, reusable, and performance-optimized Magento 2 modules tailored to your store's exact needs.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl relative overflow-hidden bg-neutral-100">
        <Image
          src="/services/magento_module.png"
          alt="Custom Magento Module Development"
          fill={true}
          sizes="100vw"
          className="object-contain rounded-xl"
        />
      </div>
    ),
    icon: <IconCode className="h-4 w-4 text-white" />,
  },
  {
    title: "Shopify App Development & Customization",
    description: "Extend your Shopify store with powerful private or public apps and custom storefront components.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl relative overflow-hidden bg-neutral-100">
        <Image
          src="/services/shopify_development.png"
          alt="Custom Magento Module Development"
          fill
          className="object-contain rounded-xl"
        />
      </div>
    ),
    icon: <IconCode className="h-4 w-4 text-white" />,
  },
  {
    title: "Headless eCommerce Solutions",
    description: "Power up performance and UX with headless builds using modern stacks like Next.js, Nuxt, or Vue Storefront.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl relative overflow-hidden bg-neutral-100">
        <Image
          src="/services/headless_commerce.png"
          alt="Custom Magento Module Development"
          fill
          className="object-contain rounded-xl"
        />
      </div>
    ),
    icon: <IconCode className="h-4 w-4 text-white" />,
  },
  {
    title: "3rd Party Integrations",
    description: "Connect your store with CRMs, ERPs, shipping providers, and marketing tools.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl relative overflow-hidden bg-neutral-100">
        <Image
          src="/services/service_integration.png"
          alt="Custom Magento Module Development"
          fill
          className="object-contain rounded-xl"
        />
      </div>
    ),
    icon: <IconSettings className="h-4 w-4 text-white" />,
  },
  {
    title: "Performance Optimization & Code Audits",
    description: "Diagnose bottlenecks and optimize your store for speed, scalability, and SEO.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl relative overflow-hidden bg-neutral-100">
        <Image
          src="/services/performance_optimize.png"
          alt="Custom Magento Module Development"
          fill
          className="object-contain rounded-xl"
        />
      </div>
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-white" />,
  },
  {
    title: "Training & Consulting",
    description: "Need a mentor or a consultant? I offer 1-on-1 or team sessions to help developers or store admins upskill.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl relative overflow-hidden bg-neutral-100">
        <Image
          src="/services/training_consult.png"
          alt="Custom Magento Module Development"
          fill
          className="object-contain rounded-xl"
        />
      </div>
    ),
    icon: <IconBook className="h-4 w-4 text-white" />,
  }
];

export default Services;
