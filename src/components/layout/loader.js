"use client";

import SplashCursor from "../SplashCursor";

export default function Loader() {
  const text = "Loading...".split("");

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white font-semibold text-2xl scale-[2]">
      <div className="relative flex items-center justify-center">
        {/* animated background */}
        <div className="absolute inset-0 loader-mask">
          <div className="loader-animation"></div>
        </div>

        {/* <SplashCursor className="z-[99999]" /> */}
        {text.map(function (letter, index) {
          return (
            <span
              key={index}
              className="loader-letter inline-block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          );
        })}
      </div>
    </div>
  );
}
