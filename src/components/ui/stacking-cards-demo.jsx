"use client";

import { createContext, useContext, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const StackingCardsContext = createContext(null);

export default function StackingCards({
  children,
  className = "",
  scaleMultiplier = 0.04,
  totalCards = 0,
}) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <StackingCardsContext.Provider
      value={{
        progress: scrollYProgress,
        scaleMultiplier,
        totalCards,
      }}
    >
      <div ref={containerRef} className={className}>
        {children}
      </div>
    </StackingCardsContext.Provider>
  );
}

export function StackingCardItem({
  children,
  index,
  topPosition,
  className = "",
}) {
  const context = useContext(StackingCardsContext);

  if (!context) {
    throw new Error("StackingCardItem must be used inside StackingCards");
  }

  const { progress, scaleMultiplier, totalCards } = context;

  const scaleTo = 1 - (totalCards - index) * scaleMultiplier;

  const range = [index * (1 / totalCards), 1];

  const scale = useTransform(progress, range, [1, scaleTo]);

  const top = topPosition || `${8 + index * 4}%`;

  return (
    <div className="sticky top-0 h-screen flex items-center justify-center">
      <motion.div
        style={{ scale, top }}
        className={`relative origin-top w-full max-w-5xl ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
