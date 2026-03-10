"use client";

import Heading from "@/components/layout/heading";
import Section from "@/components/layout/section";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Factory,
  Truck,
  Cpu,
  ShoppingCart,
  HeartPulse,
  Banknote,
} from "lucide-react";

const industries = [
  { name: "Manufacturing", icon: Factory },
  { name: "Logistics", icon: Truck },
  { name: "Technology", icon: Cpu },
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Finance", icon: Banknote },
];

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}

function Industry() {
  const isMobile = useIsMobile();

  return (
    <Section className="">
      <Heading
        className="mb-12 md:mb-20"
        heading="Built for Every Team"
        highliter="Every Industry"
        pera="From Image generation to video generation, Everything AI has APIs for literally everything. It can even create this website copy for you."
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] md:w-[600px] md:h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(70.755% 0.19742 46.444 / 0.12), transparent 70%)",
        }}
      />

      {/* Mobile grid layout */}
      {isMobile ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 px-2">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="rounded-2xl border border-border bg-card/80 backdrop-blur-md flex flex-col items-center justify-center gap-3 py-6 px-4"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <span className="text-xs sm:text-sm font-medium text-foreground text-center">
                  {industry.name}
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        /* Desktop fan layout */
        <div className="relative h-72 w-full flex items-center justify-center">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            const total = industries.length;
            const angle = (i - (total - 1) / 2) * 14;
            const offsetX = (i - (total - 1) / 2) * 85;

            return (
              <motion.div
                key={industry.name}
                className="absolute w-44 h-60 rounded-2xl border border-border bg-card/80 backdrop-blur-md flex flex-col items-center justify-center gap-4 cursor-pointer group"
                style={{
                  zIndex: i,
                  transformOrigin: "bottom center",
                }}
                initial={{ rotate: angle, x: offsetX }}
                whileHover={{
                  rotate: 0,
                  y: -40,
                  scale: 1.1,
                  zIndex: 20,
                  boxShadow: "0 0 40px oklch(70.755% 0.19742 46.444 / 0.35)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {industry.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      )}
    </Section>
  );
}

export default Industry;
