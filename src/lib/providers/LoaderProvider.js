"use client";

import Loader from "@/components/layout/loader";
import SplashCursor from "@/components/SplashCursor";
import { useEffect, useState } from "react";

export default function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(function () {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 5000);

    return function () {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {children}

      {loading && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black">
          <Loader />
         
        </div>
      )}
    </>
  );
}
