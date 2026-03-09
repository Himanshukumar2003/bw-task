"use client";

import { useRef } from "react";
import Image from "next/image";

import StackingCards, {
  StackingCardItem,
} from "@/components/ui/stacking-cards-demo";

const cards = [
  {
    accent: "#f97316",
    title: "The Guiding Light",
    description:
      "Lighthouses have stood as beacons of hope for centuries, guiding sailors safely through treacherous waters. Their glowing light and towering presence serve as a reminder of humanity's connection to the sea.",
    image: "/hero.png",
  },
  {
    accent: "#3b82f6",
    title: "Life Beneath the Waves",
    description:
      "From shimmering schools of fish to solitary hunters, the ocean is home to an incredible variety of marine life. Each species plays a vital role in maintaining the balance of underwater ecosystems.",
    image: "/hero.png",
  },
  {
    accent: "#ef4444",
    title: "Alone on the Open Sea",
    description:
      "Drifting across the endless horizon, traveling alone on the sea is a test of courage and resilience.",
    image: "/hero.png",
  },
  {
    accent: "#10b981",
    title: "The Art of Sailing",
    description:
      "Harnessing the power of the wind, sailing is both a skill and an adventure.",
    image: "/hero.png",
  },
  {
    accent: "#a855f7",
    title: "The Era of Whaling",
    description:
      "Once a thriving industry, whale hunting shaped economies and cultures across the world.",
    image: "/hero.png",
  },
];

export default function StackingCardsDemo() {
  const container = useRef(null);

  return (
    <div className="" ref={container}>
      <StackingCards
        totalCards={cards.length}
        scrollOptions={{ container: container }}
      >
        {cards.map(({ accent, description, image, title }, index) => (
          <StackingCardItem
            key={index}
            index={index}
            className="h-[620px]  max-w-7xl"
          >
            <div
              className="h-[80%] relative sm:h-[70%] flex-col sm:flex-row aspect-video px-8 flex w-11/12 rounded-3xl mx-auto relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #111111 0%, #1c1c1c 100%)",
                boxShadow:
                  "0 25px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              {/* Accent glow */}
              <div
                className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
                style={{ backgroundColor: accent }}
              />
              <div
                className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
                style={{ backgroundColor: accent }}
              />

              {/* Subtle grid */}
              <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                  backgroundSize: "44px 44px",
                }}
              />

              {/* Text Section */}
              <div className="flex-1 flex flex-col justify-center py-12 relative z-10">
                <div
                  className="w-8 h-[3px] rounded-full mb-5"
                  style={{ backgroundColor: accent }}
                />
                <span
                  className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(cards.length).padStart(2, "0")}
                </span>
                <h3 className="font-black text-4xl sm:text-5xl mb-4 leading-tight tracking-tight text-white">
                  {title}
                </h3>
                <p
                  className="text-md sm:text-base leading-relaxed max-w-sm"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {description}
                </p>
                <div className="mt-8">
                  <button
                    className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
                    style={{
                      border: `1px solid ${accent}50`,
                      backgroundColor: `${accent}18`,
                      color: "white",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${accent}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${accent}18`;
                    }}
                  >
                    Read more
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full sm:w-1/2  hidden md:flex items-center justify-center py-6 sm:py-0 relative z-10">
                <div
                  className="w-full h-48 sm:h-4/5 rounded-2xl relative overflow-hidden"
                  style={{
                    boxShadow:
                      "0 0 0 1px rgba(255,255,255,0.07), 0 20px 40px rgba(0,0,0,0.6)",
                  }}
                >
                  <Image
                    src={image}
                    alt={title}
                    className="object-cover  transition-transform duration-700"
                    fill
                  />
                </div>
              </div>
            </div>
          </StackingCardItem>
        ))}
      </StackingCards>
    </div>
  );
}
