"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/* ── FloatingNav ─────────────────────────────────────────────────────────── */
export function FloatingNav({ navItems, className }) {
  const [active, setActive] = useState(null);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex items-center", className)}
    >
      <div className="relative flex items-center gap-0.5 rounded-full border border-white/[0.08] bg-[#0a0a0a] px-1.5 py-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_8px_32px_rgba(0,0,0,0.8)]">
        {/* subtle inner glow */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.04] to-transparent" />

        {navItems.map((navItem, idx) => {
          const isActive = active === idx;
          return (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
              className="group relative flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200"
            >
              {/* hover/active pill */}
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.07]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  />
                )}
              </AnimatePresence>

              {/* icon — mobile */}
              <span className="relative block text-neutral-500 transition-colors group-hover:text-white sm:hidden">
                {navItem.icon}
              </span>

              {/* label — desktop */}
              <span className="relative hidden text-neutral-400 transition-colors group-hover:text-white sm:block">
                {navItem.name}
              </span>
            </a>
          );
        })}

        {/* divider */}
        <div className="mx-1.5 h-4 w-px bg-white/[0.08]" />
      </div>
    </motion.nav>
  );
}
