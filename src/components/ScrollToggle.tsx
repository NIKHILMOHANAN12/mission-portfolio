"use client"; // if using Next.js App Router

import { CaretCircleUpIcon } from "@phosphor-icons/react";
import { useState, useEffect } from "react";


export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Show only when user reaches the bottom
      if (scrollTop + windowHeight >= docHeight - 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-28 left-1/2 -translate-x-1/2 z-50">
      <button
        onClick={scrollToTop}
        className={`
          flex flex-col items-center
          transition-opacity duration-500
          ${isVisible ? "opacity-100 animate-bounce" : "opacity-0 pointer-events-none"}
        `}
      >
        <div className="text-gray-300 hover:text-white transition-colors">
          <CaretCircleUpIcon size={32} />
        </div>
        <span className="mt-1 text-white font-semibold text-[12px]">
          BACK TO TOP
        </span>
      </button>
    </div>
  );
}
