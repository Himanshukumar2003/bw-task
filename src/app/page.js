import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Features from "@/home.js/feachers";
import CardsSection from "@/home.js/scroll-card-stack";
import FeaturesSectionDemo from "@/home.js/features-section-demo-3";
import CategorySection from "@/home.js/Industry";
import FaqSection from "@/home.js/faqs";
import SplashCursor from "@/components/SplashCursor";
import ScrollReveal from "@/components/ScrollReveal";
import Heading from "@/components/layout/heading";
2;
export default function MacbookScrollDemo() {
  return (
    <>
      <div className="w-full relative overflow-hidden bg-white dark:bg-[#0B0B0F] ">
        <div
          className="absolute top-0 right-25  border-0 h-[11%]
  rounded-full
  rotate-[-25deg]
  origin-center
     bg-none
  shadow-[0_0_300px_302px_rgba(255,160,58,0.3)]
  opacity-0
  z-1
  [animation:fadeInCustom_1s_ease_0s_1,bgGradientMove_7s_linear_1s_infinite]"
        ></div>
        <MacbookScroll
          title={<span></span>}
          src={`/hero.png`}
          showGradient={false}
          className="z-3"
        />
      </div>

      <div className="bg-card relative">
        <div className=""></div>
        <div className="  container  max-w-7xl mx-auto mt-2 px-4  py-12">
          <Heading
            heading="We Build  Modern"
            highliter="Web Experiences"
            pera="From Image generation to video generation, Everything AI has APIs for literally everything. It can even create this website copy for you."
          />
          <Features />
        </div>
      </div>

      <div className="  relative  h-[490vh]">
        <CardsSection />
      </div>

      <div
        className="py-8  overflow-hidden relative relative
"
      >
        <FeaturesSectionDemo></FeaturesSectionDemo>
      </div>

      <CategorySection></CategorySection>
    </>
  );
}
