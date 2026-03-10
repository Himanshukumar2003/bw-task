"use client";

import Heading from "@/components/layout/heading";
import Section from "@/components/layout/section";
import { motion } from "framer-motion";
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

function Industry() {
  return (
    <Section className="">
      <Heading
        className="mb-20"
        heading="Built for Every Team"
        highliter="Every Industry"
        pera="From Image generation to video generation, Everything AI has APIs for literally everything. It can even create this website copy for you."
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(70.755% 0.19742 46.444 / 0.12), transparent 70%)",
        }}
      />

      <div className="relative h-72 w-full flex items-center justify-center ">
        {industries.map(function (industry, i) {
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
    </Section>
  );
}

export default Industry;
