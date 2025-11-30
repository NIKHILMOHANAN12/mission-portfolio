"use client";

import { useRef, useEffect } from "react";

export default function ParallaxSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadGsap() {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }

    loadGsap();
  }, []);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
