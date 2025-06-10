import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-8xl grid-cols-2 gap-4 md:auto-rows-[20rem] md:grid-cols-3 md:gap-8",
        className
      )}
    >
      {children}
    </div>
  );
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15, // stagger each item
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export const BentoGridItem = ({
  title,
  description,
  header,
  icon,
  className,
  index,
}: {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  index?: number;
}) => {
  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 p-2 transition duration-200 hover:shadow-xl border-white/[0.2] bg-transparent shadow-none",
        className
      )}
    >
      {header}
      <div>
        {icon}
        <div className="mt-2 mb-2 font-sans font-bol text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-norma text-neutral-300">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
