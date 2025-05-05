"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const wordsArray = words.split(" ");

  const renderWords = () => {
    return (
      <motion.div>
        {wordsArray.map((word, idx) => {
          return (
            <React.Fragment key={word + idx}>
              <motion.span
                // change here if idx is greater than 3, change the text color to #CBACF9
                className={` ${
                  idx > 3 ? "text-purple" : "dark:text-white text-black"
                }`}
              >
                {word}{" "}
              </motion.span>
              {idx === 1 && <br />}
            </React.Fragment>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      {/* mt-4 to my-4 */}
      <div className="my-4">
        {/* remove  text-2xl from the original */}
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
