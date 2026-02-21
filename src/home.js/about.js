"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Affordable pricing. Easy scaling.",
    description:
      "Start small to explore automation, add agents as you scale, and unlock enterprise-grade guardrails, orchestration, and reporting when you're ready.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-emerald-500 text-white text-3xl font-semibold">
        Pricing Dashboard
      </div>
    ),
  },
  {
    title: "Built for fast moving teams.",
    description:
      "Agents work inside your existing tools with built-in approvals, brand and policy guardrails, and full traceability.",
    content: (
      <img
        src="/linear.webp"
        className="h-full w-full object-cover"
        alt="Product preview"
      />
    ),
  },
  {
    title: "Enterprise-grade control.",
    description:
      "Every action is auditable. Every outcome accountable. Maintain full visibility without slowing down your team.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-3xl font-semibold">
        Audit Logs
      </div>
    ),
  },
  {
    title: "Scale without complexity.",
    description:
      "Add automation gradually. Expand confidently. Grow without rebuilding your workflows.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-3xl font-semibold">
        Automation Flow
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <section className="w-full">
      <StickyScroll content={content} />
    </section>
  );
}
