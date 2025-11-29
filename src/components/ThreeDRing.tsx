"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ThreeDRing = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const xPos = useRef<number>(0);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    const images = Array.from(ring.querySelectorAll<HTMLDivElement>(".img"));

    // --- GSAP setup ---
    gsap.set(ring, { rotationY: 180, cursor: "grab" });
    // images.forEach((img, i) => {
    //   gsap.set(img, {
    //     rotateY: i * -36,
    //     transformOrigin: "50% 50% 500px",
    //     z: -500,
    //     backgroundImage: `url(https://picsum.photos/id/${i + 32}/600/400/)`,
    //     backgroundPosition: "0px 0px",
    //     backfaceVisibility: "hidden",
    //     backgroundSize: "cover",
    //   });
    // });

    const imageList = [
  "/images/Gallery-1.png",
  "/images/Gallery-2.png",
  "/images/Gallery-3.png",
  "/images/Gallery-4.png",
  "/images/Gallery-5.png",
  "/images/Gallery-6.png",
  "/images/Gallery-7.png",
  "/images/Gallery-8.png",
  "/images/Gallery-9.png",
  "/images/Gallery-10.png",
];

images.forEach((img, i) => {
  gsap.set(img, {
    rotateY: i * -36,
    transformOrigin: "50% 50% 500px",
    z: -500,
    backgroundImage: `url(${imageList[i]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backfaceVisibility: "hidden",
    backgroundRepeat: "no-repeat",
  });
});


    gsap.from(images, {
      duration: 1.5,
      y: 10,
      opacity: 1,
      stagger: 0.1,
      ease: "expo",
    });

    // --- Hover effect ---
    // images.forEach((img) => {
    //   img.addEventListener("mouseenter", () => {
    //     images.forEach((el) =>
    //       gsap.to(el, { opacity: el === img ? 1 : 0.5, ease: "power3" })
    //     );
    //   });
    //   img.addEventListener("mouseleave", () => {
    //     gsap.to(images, { opacity: 1, ease: "power2.inOut" });
    //   });
    // });

    // --- Drag behavior ---
    const dragStart = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      xPos.current = clientX;
      gsap.set(ring, { cursor: "grabbing" });
      window.addEventListener("mousemove", drag);
      window.addEventListener("touchmove", drag);
    };

    const drag = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      // gsap.to(ring, {
      //   rotationY: `-=${(clientX - xPos.current) % 360}`,
      //   onUpdate: () => {
      //     const rotationY = gsap.getProperty(ring, "rotationY") as number;
      //     images.forEach((img, i) => {
      //       img.style.backgroundPosition = `${100 - ((rotationY - 180 - i * 36) % 360) / 360 * 500
      //         }px 0px`;
      //     });
      //   },
      // });

      gsap.to(ring, {
    rotationY: `-=${(clientX - xPos.current) % 360}`,
    ease: "none"
  });

      xPos.current = clientX;
    };

    const dragEnd = () => {
      window.removeEventListener("mousemove", drag);
      window.removeEventListener("touchmove", drag);
      gsap.set(ring, { cursor: "grab" });
    };

    window.addEventListener("mousedown", dragStart);
    window.addEventListener("touchstart", dragStart);
    window.addEventListener("mouseup", dragEnd);
    window.addEventListener("touchend", dragEnd);

    return () => {
      window.removeEventListener("mousedown", dragStart);
      window.removeEventListener("touchstart", dragStart);
      window.removeEventListener("mouseup", dragEnd);
      window.removeEventListener("touchend", dragEnd);
    };
  }, []);

  return (
    <div className="w-full h-[400px] overflow-hidden flex items-start justify-center mt-8">
      <div className="relative w-[300px] h-[400px] perspective">
        <div
          ref={ringRef}
          className="ring absolute w-full h-full transform-style-preserve-3d outline-none shadow-none border-none focus:outline-none"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="img absolute w-full h-full rounded-lg border-none outline-none focus:outline-none"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeDRing;
