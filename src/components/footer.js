"use client";
import FaqSection from "@/home.js/faqs";
import React, { useEffect, useRef } from "react";
import Glow from "./layout/bg-glow";

export default function Footer() {
  const mainRef = useRef(null);
  const footerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(function () {
    function updateFooter() {
      if (!footerRef.current || !mainRef.current) return;

      const footerHeight = footerRef.current.offsetHeight;
      const mainBottom =
        mainRef.current.offsetTop + mainRef.current.offsetHeight;

      const scrollBottom = window.scrollY + window.innerHeight;

      // Parallax text
      if (textRef.current) {
        const triggerPoint = mainBottom - window.innerHeight;
        if (window.scrollY >= triggerPoint) {
          const offset = window.scrollY - triggerPoint;
          textRef.current.style.transform =
            "translateY(" + offset * 0.15 + "px)";
        }
      }

      if (scrollBottom >= mainBottom) {
        footerRef.current.style.position = "fixed";
        footerRef.current.style.bottom = "0";
        footerRef.current.style.left = "0";
        footerRef.current.style.right = "0";

        document.body.style.marginBottom = footerHeight + "px";
      } else {
        footerRef.current.style.position = "relative";
        document.body.style.marginBottom = "0px";
      }
    }

    updateFooter();
    window.addEventListener("scroll", updateFooter);
    window.addEventListener("resize", updateFooter);

    return function () {
      window.removeEventListener("scroll", updateFooter);
      window.removeEventListener("resize", updateFooter);
    };
  }, []);

  return (
    <>
      <main ref={mainRef} className="w-full  relative z-10">
        <FaqSection />
      </main>

      <footer
        ref={footerRef}
        className="    text-white pt-10 pb-6 px-6 md:px-16 relative z-0 w-full"
      >
        <Glow className="top-0 left-[20%]  w-0"></Glow>
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Left Logo */}
          <div className="flex items-center gap-3">
            <div>
              <h2 className="text-2xl font-semibold">BW TASKS</h2>
            </div>
          </div>

          {/* Center Contact */}
          <div className="text-center">
            <p className="text-gray-400 mb-2">Connect with us:</p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <span className="hover:underline cursor-pointer">
                +91 63589 16474
              </span>
              <span className="hover:underline cursor-pointer">
                gettasks@petpooja.com
              </span>
            </div>
          </div>

          {/* Right Address */}
          <div className="text-center md:text-right text-sm text-gray-300 leading-6">
            <p>3rd Floor, Tower-A, Gopal</p>
            <p>Palace, Nehrunagar, Ambawadi,</p>
            <p>Ahmedabad, Gujarat – 380015</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {["in", "ig", "yt", "fb"].map((icon, i) => (
            <div
              key={i}
              className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition duration-300 cursor-pointer"
            >
              {icon}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-4"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          © 2026 – Prayosha Food Services Pvt. Ltd., India • Privacy •
          Compliance • Terms • Cancellation & Refund • Escalation Matrix
        </div>

        {/* Branding Line */}
        <div className="text-center text-sm text-gray-400 mt-3">
          Designed & Developed by
          <span className="ml-1 hover:underline cursor-pointer">
            Brandingwaale
          </span>
        </div>
      </footer>
    </>
  );
}
