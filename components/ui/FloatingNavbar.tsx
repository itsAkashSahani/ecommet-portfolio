"use client";

import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import {
  IconInfoCircle,
  IconBriefcase,
  IconLayoutDashboard,
  IconTools,
  IconMail,
  IconHome,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const previous = scrollYProgress.getPrevious() ?? 0;

    if (typeof current === "number") {
      const direction = current - previous;

      const isAtTop = current < 0.05;
      const isScrollingUp = direction < 0;

      setVisible(isAtTop || isScrollingUp);
    }
  });

  type NavItem = {
    name: string;
    link: string;
    icon: JSX.Element;
  };

  const navItems: NavItem[] = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome size={20} stroke={1.5} />,
    },
    {
      name: "About Us",
      link: "#about",
      icon: <IconInfoCircle size={20} stroke={1.5} />,
    },
    {
      name: "Services",
      link: "#services",
      icon: <IconBriefcase size={20} stroke={1.5} />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconLayoutDashboard size={20} stroke={1.5} />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <IconTools size={20} stroke={1.5} />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMail size={20} stroke={1.5} />,
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-6 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: NavItem, idx: number) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "flex items-center px-2 md:px-3 py-1 text-sm whitespace-nowrap transition-colors",
              "text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:inline">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
