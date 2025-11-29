"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

interface Props {
  src: StaticImageData;
  alt: string;
  speed?: number;
}

export default function ParallaxImage({ src, alt, speed = 0.3 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadGsap() {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger =
        (await import("gsap/ScrollTrigger")).ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      if (ref.current) {
        gsap.to(ref.current, {
          yPercent: speed * -50,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            scrub: true,
          },
        });
      }
    }

    loadGsap();
  }, [speed]);

  return (
    <div ref={ref} className="w-full h-full overflow-hidden">
      <Image src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
