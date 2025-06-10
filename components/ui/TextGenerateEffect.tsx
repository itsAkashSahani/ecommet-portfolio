"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Word = {
  text: string;
  highlight?: boolean;
  break?: boolean;
  className?: string;
};

type TextGenerateEffectProps = {
  words: Word[];
  className?: string;
};

export const TextGenerateEffect = ({
  words,
  className,
}: TextGenerateEffectProps) => {
  const renderWords = () => {
    return (
      <motion.div>
        {words.map((word, idx) => {
          const isHighlighted = word.highlight ?? false;
          const breakLine = word.break ?? true;

          return (
            <React.Fragment key={word.text + idx}>
              <motion.span
                className={`
                  ${isHighlighted ? "text-purple" : "text-white"}
                  ${word.className ?? ""}
                `}
              >
                {word.text}{" "}
              </motion.span>
              {breakLine && <br />}
            </React.Fragment>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className=" text-white leading-snug tracking-wide">
        {renderWords()}
      </div>
    </div>
  );
};
