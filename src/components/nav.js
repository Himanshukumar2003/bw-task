"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", link: "/", icon: <IconHome className="h-4 w-4" /> },
    { name: "About", link: "#about", icon: <IconUser className="h-4 w-4" /> },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMessage className="h-4 w-4" />,
    },
  ];

  return (
    <header
      className={cn(
        "mt-5 transition-all duration-500 bg-transparent  absolute top-0 z-[9999999] w-full"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* ── Wordmark ── */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="group flex items-center gap-2"
        >
          <Image width={200} height={120} src="/logo.png" alt=""></Image>
        </motion.a>

        {/* ── Nav pills ── */}
        <FloatingNav navItems={navItems} />

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="/login"
            className="group relative overflow-hidden rounded-full border border-white/[0.12] bg-white/[0.05] px-5 py-2 text-[13px] font-medium tracking-wide text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]"
          >
            {/* shimmer on hover */}
            {/* <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" /> */}
            <span className="relative">Contact us</span>
          </a>
        </motion.div>
      </div>
    </header>
  );
}
