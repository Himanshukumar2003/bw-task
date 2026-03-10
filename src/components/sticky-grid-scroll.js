"use client";

import Section from "@/components/layout/section";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Heading from "./layout/heading";
import { Button } from "./ui/button";
import Glow from "./layout/bg-glow";

// NOTE: Install these deps in your project:
// npm install lenis gsap

export default function StickyGridScroll() {
  const blockRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    let lenis;
    let scrollTriggerCleanup = [];

    const init = async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] =
        await Promise.all([
          import("lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);

      gsap.registerPlugin(ScrollTrigger);

      // ── Smooth Scroll ──────────────────────────────────────────────────────
      lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 1.4 });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      // ── Gather Elements ────────────────────────────────────────────────────
      const block = blockRef.current;
      if (!block) return;

      const wrapper = block.querySelector(".block__wrapper");
      const content = block.querySelector(".content");
      const title = block.querySelector(".content__title");
      const description = block.querySelector(".content__description");
      const button = block.querySelector(".content__button");
      const grid = block.querySelector(".gallery__grid");
      const items = [...block.querySelectorAll(".gallery__item")];

      // ── Init Content State ─────────────────────────────────────────────────
      let titleOffsetY = 0;
      if (description && button) {
        gsap.set([description, button], { opacity: 0, pointerEvents: "none" });
      }
      if (content && title) {
        const dy = (content.offsetHeight - title.offsetHeight) / 2;
        titleOffsetY = (dy / content.offsetHeight) * 100;
        gsap.set(title, { yPercent: titleOffsetY });
      }

      // ── Group Items by Column ──────────────────────────────────────────────
      const numColumns = 3;
      const columns = Array.from({ length: numColumns }, () => []);
      items.forEach((item, i) => columns[i % numColumns].push(item));

      // ── Parallax ──────────────────────────────────────────────────────────
      if (wrapper) {
        const st1 = gsap.from(wrapper, {
          yPercent: -100,
          ease: "none",
          scrollTrigger: {
            trigger: block,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
        scrollTriggerCleanup.push(st1.scrollTrigger);
      }

      // ── Title Fade-in ──────────────────────────────────────────────────────
      if (title) {
        const st2 = gsap.from(title, {
          opacity: 0,
          duration: 0.7,
          ease: "power1.out",
          scrollTrigger: {
            trigger: block,
            start: "top 57%",
            toggleActions: "play none none reset",
          },
        });
        scrollTriggerCleanup.push(st2.scrollTrigger);
      }

      // ── Grid Reveal Timeline ───────────────────────────────────────────────
      const gridRevealTimeline = () => {
        const tl = gsap.timeline();
        const wh = window.innerHeight;
        const dy = wh - (wh - grid.offsetHeight) / 2;

        columns.forEach((column, colIndex) => {
          const fromTop = colIndex % 2 === 0;
          tl.from(
            column,
            {
              y: dy * (fromTop ? -1 : 1),
              stagger: { each: 0.06, from: fromTop ? "end" : "start" },
              ease: "power1.inOut",
              duration: 1,
            },
            "grid-reveal"
          );
        });
        return tl;
      };

      // ── Grid Zoom Timeline ─────────────────────────────────────────────────
      const gridZoomTimeline = () => {
        const tl = gsap.timeline({
          defaults: { duration: 1, ease: "power3.inOut" },
        });
        tl.to(grid, { scale: 2.05 });
        tl.to(columns[0], { xPercent: -40 }, "<");
        tl.to(columns[2], { xPercent: 40 }, "<");
        tl.to(
          columns[1],
          {
            yPercent: (index) =>
              (index < Math.floor(columns[1].length / 2) ? -1 : 1) * 40,
            duration: 0.5,
            ease: "power1.inOut",
          },
          "-=0.5"
        );
        return tl;
      };

      // ── Toggle Content ─────────────────────────────────────────────────────
      const toggleContent = (isVisible) => {
        if (!title || !description || !button) return;
        gsap
          .timeline({ defaults: { overwrite: true } })
          .to(title, {
            yPercent: isVisible ? 0 : titleOffsetY,
            duration: 0.7,
            ease: "power2.inOut",
          })
          .to(
            [description, button],
            {
              opacity: isVisible ? 1 : 0,
              duration: 0.4,
              ease: `power1.${isVisible ? "inOut" : "out"}`,
              pointerEvents: isVisible ? "all" : "none",
            },
            isVisible ? "-=90%" : "<"
          );
      };

      // ── Main Scroll Timeline ───────────────────────────────────────────────
      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: block,
          start: "top 25%",
          end: "bottom bottom",
          scrub: true,
        },
      });

      mainTimeline
        .add(gridRevealTimeline())
        .add(gridZoomTimeline(), "-=0.6")
        .add(
          () => toggleContent(mainTimeline.scrollTrigger.direction === 1),
          "-=0.32"
        );

      scrollTriggerCleanup.push(mainTimeline.scrollTrigger);
    };

    init();

    return () => {
      scrollTriggerCleanup.forEach((st) => st && st.kill());
      if (lenis) lenis.destroy();
    };
  }, []);

  const images = [1, 2, 3, 5, 4, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <section className="py-12  relative  ">
        <div className="block block--intro">
          <figure className="media  bg-dark  w-full ">
            <Image
              alt="feachers"
              className=" media__image "
              src="/img/main-img.png"
              width={2000}
              height={2000}
            />
          </figure>
        </div>

        <div className="block block--main   " ref={blockRef}>
          <div className="block__wrapper ">
            <div className="content">
              <Heading
                heading="We Build  Modern"
                highliter="Web Experiences"
                pera="From Image generation to video generation, Everything AI has APIs for literally everything. It can even create this website copy for you."
              />
              <Button className="">Contact us</Button>
            </div>
            <Glow></Glow>
            <div className="gallery">
              <ul className="gallery__grid">
                {images.map((num) => (
                  <li key={num} className="gallery__item">
                    <Image
                      width={500}
                      height={500}
                      className="gallery__image  relative z-3  object-contain  aspect-square"
                      src={`/img/feachers/${num}.png`}
                      alt={`Image ${num}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
