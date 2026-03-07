import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Features from "@/home.js/feachers";
import CardsSection from "@/home.js/scroll-card-stack";
import FeaturesSectionDemo from "@/home.js/features-section-demo-3";
import CategorySection from "@/home.js/Industry";

import Heading from "@/components/layout/heading";
import StickyGridScroll from "@/components/sticky-grid-scroll";
import Glow from "@/components/layout/bg-glow";

export default function MacbookScrollDemo() {
  return (
    <>
      <div className="w-full relative overflow-hidden bg-white dark:bg-[#0B0B0F] ">
        <Glow></Glow>
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
      <StickyGridScroll></StickyGridScroll>
      <div
        className="py-8  overflow-hidden relative 
"
      >
        <FeaturesSectionDemo></FeaturesSectionDemo>
      </div>

      <CategorySection></CategorySection>
    </>
  );
}
