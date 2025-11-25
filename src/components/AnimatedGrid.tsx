// "use client";

// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { CustomEase } from "gsap/all";
// import SplitType from "split-type";
// import "./styles.css"; // your same CSS file

// const AnimatedGrid: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const canvasRef = useRef<HTMLDivElement | null>(null);
//   const overlayRef = useRef<HTMLDivElement | null>(null);
//   const titleRef = useRef<HTMLParagraphElement | null>(null);

//   const items = [
//     "Chromatic Loopscape",
//     "Solar Bloom",
//     "Neon Handscape",
//     "Echo Discs",
//     "Void Gaze",
//     "Gravity Sync",
//     "Heat Core",
//     "Fractal Mirage",
//     "Nova Pulse",
//     "Sonic Horizon",
//     "Dream Circuit",
//     "Lunar Mesh",
//     "Radiant Dusk",
//     "Pixel Drift",
//     "Vortex Bloom",
//     "Shadow Static",
//     "Crimson Phase",
//     "Retro Cascade",
//     "Photon Fold",
//     "Zenith Flow",
//   ];

//   useEffect(() => {
//     if (!containerRef.current || !canvasRef.current || !overlayRef.current || !titleRef.current)
//       return;

//     const container = containerRef.current;
//     const canvas = canvasRef.current;
//     const overlay = overlayRef.current;
//     const projectTitleElement = titleRef.current;

//     gsap.registerPlugin(CustomEase);
//     CustomEase.create("hop", "0.9, 0.1, 0.1, 1");

//     const columns = 5;
//     const rows = 4;
//     const itemWidth = 160;
//     const itemHeight = 200;
//     const itemGap = 180;
//     const totalWidth = columns * (itemWidth + itemGap);
//     const totalHeight = rows * (itemHeight + itemGap);

//     let isDragging = false;
//     let startX = 0,
//       startY = 0;
//     let targetX = 0,
//       targetY = 0;
//     let currentX = 0,
//       currentY = 0;
//     let velocityX = 0,
//       velocityY = 0;
//     let lastX = 0,
//       lastY = 0,
//       lastTime = 0;
//     let canDrag = true;
//     let isExpanded = false;
//     let expandedItem: HTMLDivElement | null = null;
//     let titleSplit: any = null;

//     // Generate grid items
//     const itemsGrid: HTMLDivElement[] = [];
//     for (let y = 0; y < rows; y++) {
//       for (let x = 0; x < columns; x++) {
//         const item = document.createElement("div");
//         item.className = "item";
//         item.style.left = `${x * (itemWidth + itemGap)}px`;
//         item.style.top = `${y * (itemHeight + itemGap)}px`;

//         const img = document.createElement("img");
//         const imgIndex = (y * columns + x) % items.length;
//         img.src = `/images/img${(imgIndex % 20) + 1}.jpg`; // public/images/
//         item.appendChild(img);

//         item.addEventListener("click", () => {
//           if (!isExpanded) expandItem(item);
//         });

//         canvas.appendChild(item);
//         itemsGrid.push(item);
//       }
//     }

//     // Title animation
//     function setAndAnimateTitle(title: string) {
//       if (titleSplit) titleSplit.revert();
//       projectTitleElement.textContent = title;
//       titleSplit = new SplitType(projectTitleElement, { types: "words" });
//       gsap.set(titleSplit.words, { y: "100%" });
//     }

//     const animateTitleIn = () =>
//       gsap.to(titleSplit.words, {
//         y: "0%",
//         duration: 1,
//         stagger: 0.1,
//         ease: "power3.out",
//       });

//     const animateTitleOut = () =>
//       gsap.to(titleSplit.words, {
//         y: "-100%",
//         duration: 1,
//         stagger: 0.1,
//         ease: "power3.out",
//       });

//     // Expand / Close
//     function expandItem(item: HTMLDivElement) {
//       isExpanded = true;
//       canDrag = false;
//       container.style.cursor = "auto";

//       const imgSrc = item.querySelector("img")?.src || "";
//       const imgMatch = imgSrc.match(/img(\d+)\.jpg/);
//       const imgNum = imgMatch ? parseInt(imgMatch[1]) : 1;
//       const titleIndex = (imgNum - 1) % items.length;

//       setAndAnimateTitle(items[titleIndex]);
//       item.style.visibility = "hidden";

//       const rect = item.getBoundingClientRect();
//       overlay.classList.add("active");

//       expandedItem = document.createElement("div");
//       expandedItem.className = "expanded-item";
//       const img = document.createElement("img");
//       img.src = imgSrc;
//       expandedItem.appendChild(img);
//       expandedItem.addEventListener("click", closeExpandedItem);
//       document.body.appendChild(expandedItem);

//       itemsGrid.forEach((el) => {
//         if (el !== item) gsap.to(el, { opacity: 0, duration: 0.3 });
//       });

//       gsap.delayedCall(0.5, animateTitleIn);
//       gsap.fromTo(
//         expandedItem,
//         {
//           width: itemWidth,
//           height: itemHeight,
//           x: rect.left + itemWidth / 2 - window.innerWidth / 2,
//           y: rect.top + itemHeight / 2 - window.innerHeight / 2,
//         },
//         {
//           width: window.innerWidth * 0.4,
//           height: window.innerWidth * 0.48,
//           x: 0,
//           y: 0,
//           duration: 1,
//           ease: "hop",
//         }
//       );
//     }

//     function closeExpandedItem() {
//       animateTitleOut();
//       overlay.classList.remove("active");
//       if (expandedItem) expandedItem.remove();
//       isExpanded = false;
//       canDrag = true;
//       container.style.cursor = "grab";
//       itemsGrid.forEach((el) => (el.style.opacity = "1"));
//     }

//     // Drag and inertia logic
//     const pointerDown = (x: number, y: number) => {
//       if (!canDrag) return;
//       isDragging = true;
//       startX = x - targetX;
//       startY = y - targetY;
//       lastX = x;
//       lastY = y;
//       lastTime = Date.now();
//       container.style.cursor = "grabbing";
//     };

//     const pointerUp = () => {
//       if (!canDrag) return;
//       isDragging = false;
//       container.style.cursor = "grab";
//     };

//     const pointerMove = (x: number, y: number) => {
//       if (!isDragging || !canDrag) return;
//       targetX = x - startX;
//       targetY = y - startY;

//       const now = Date.now();
//       const dt = (now - lastTime) / 1000;
//       velocityX = (x - lastX) / dt;
//       velocityY = (y - lastY) / dt;
//       lastX = x;
//       lastY = y;
//       lastTime = now;
//     };

//     container.addEventListener("mousedown", (e) => pointerDown(e.clientX, e.clientY));
//     window.addEventListener("mouseup", pointerUp);
//     window.addEventListener("mousemove", (e) => pointerMove(e.clientX, e.clientY));

//     container.addEventListener("touchstart", (e) => {
//       const t = e.touches[0];
//       pointerDown(t.clientX, t.clientY);
//     });
//     window.addEventListener("touchend", pointerUp);
//     window.addEventListener("touchmove", (e) => {
//       const t = e.touches[0];
//       pointerMove(t.clientX, t.clientY);
//     });

//     // Wrap grid
//     function wrapGrid() {
//       itemsGrid.forEach((item) => {
//         const left = parseFloat(item.style.left) + currentX;
//         const top = parseFloat(item.style.top) + currentY;

//         let newLeft = left;
//         let newTop = top;

//         if (left + itemWidth < -totalWidth / 2) newLeft += totalWidth;
//         else if (left - itemWidth > totalWidth * 1.5) newLeft -= totalWidth;

//         if (top + itemHeight < -totalHeight / 2) newTop += totalHeight;
//         else if (top - itemHeight > totalHeight * 1.5) newTop -= totalHeight;

//         item.style.left = `${newLeft - currentX}px`;
//         item.style.top = `${newTop - currentY}px`;
//       });
//     }

//     // Animation loop
//     function animate() {
//       const friction = 0.9;
//       const ease = 0.08;

//       currentX += (targetX - currentX) * ease;
//       currentY += (targetY - currentY) * ease;

//       if (!isDragging) {
//         targetX += velocityX * 0.02;
//         targetY += velocityY * 0.02;
//         velocityX *= friction;
//         velocityY *= friction;
//       }

//       canvas.style.transform = `translate(${currentX}px, ${currentY}px)`;
//       wrapGrid();
//       requestAnimationFrame(animate);
//     }

//     animate();
//   }, []);

//   return (
//     <>
//       <nav>
//         <div className="logo">
//           <a href="#">Codegrid</a>
//         </div>
//         <div className="links">
//           <a href="#">About</a>
//         </div>
//       </nav>

//       <div className="container" ref={containerRef}>
//         <div className="canvas" ref={canvasRef}></div>
//         <div className="overlay" ref={overlayRef}></div>
//       </div>

//       <div className="project-title">
//         <p ref={titleRef}></p>
//       </div>
//     </>
//   );
// };

// export default AnimatedGrid;


"use client";

import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { CustomEase } from "gsap/all";
import dynamic from "next/dynamic";

// Import GSAP safely only on client
let gsap: any;
let CustomEase: any;
if (typeof window !== "undefined") {
  gsap = require("gsap").gsap;
  CustomEase = require("gsap/CustomEase").CustomEase;
}
import SplitType from "split-type";

const AnimatedGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLParagraphElement | null>(null);

  const items = [
    "Chromatic Loopscape",
    "Solar Bloom",
    "Neon Handscape",
    "Echo Discs",
    "Void Gaze",
    "Gravity Sync",
    "Heat Core",
    "Fractal Mirage",
    "Nova Pulse",
    "Sonic Horizon",
    "Dream Circuit",
    "Lunar Mesh",
    "Radiant Dusk",
    "Pixel Drift",
    "Vortex Bloom",
    "Shadow Static",
    "Crimson Phase",
    "Retro Cascade",
    "Photon Fold",
    "Zenith Flow",
  ];

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current || !overlayRef.current || !titleRef.current)
      return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    const overlay = overlayRef.current;
    const projectTitleElement = titleRef.current;

    gsap.registerPlugin(CustomEase);
    CustomEase.create("hop", "0.9, 0.1, 0.1, 1");

    const columns = 5;
    const rows = 4;
    const itemWidth = 160;
    const itemHeight = 200;
    const itemGap = 180;
    const totalWidth = columns * (itemWidth + itemGap);
    const totalHeight = rows * (itemHeight + itemGap);

    let isDragging = false;
    let startX = 0,
      startY = 0;
    let targetX = 0,
      targetY = 0;
    let currentX = 0,
      currentY = 0;
    let velocityX = 0,
      velocityY = 0;
    let lastX = 0,
      lastY = 0,
      lastTime = 0;
    let canDrag = true;
    let isExpanded = false;
    let expandedItem: HTMLDivElement | null = null;
    let titleSplit: any = null;

    // Generate grid items
    const itemsGrid: HTMLDivElement[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        const item = document.createElement("div");

        // ✅ replaced `.item` class with Tailwind styles
        item.className = "absolute w-[120px] h-[160px] overflow-hidden bg-black";
        item.style.left = `${x * (itemWidth + itemGap)}px`;
        item.style.top = `${y * (itemHeight + itemGap)}px`;

        const img = document.createElement("img");
        const imgIndex = (y * columns + x) % items.length;
        img.src = `/images/img${(imgIndex % 20) + 1}.jpg`;
        img.className = "w-full h-full object-cover"; // ✅ replaces img CSS
        item.appendChild(img);

        item.addEventListener("click", () => {
          if (!isExpanded) expandItem(item);
        });

        canvas.appendChild(item);
        itemsGrid.push(item);
      }
    }

    // Title animation
    function setAndAnimateTitle(title: string) {
      if (titleSplit) titleSplit.revert();
      projectTitleElement.textContent = title;
      titleSplit = new SplitType(projectTitleElement, { types: "words" });
      gsap.set(titleSplit.words, { y: "100%" });
    }

    const animateTitleIn = () =>
      gsap.to(titleSplit.words, {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

    const animateTitleOut = () =>
      gsap.to(titleSplit.words, {
        y: "-100%",
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

    // Expand / Close
    function expandItem(item: HTMLDivElement) {
      isExpanded = true;
      canDrag = false;
      container.style.cursor = "auto";

      const imgSrc = item.querySelector("img")?.src || "";
      const imgMatch = imgSrc.match(/img(\d+)\.jpg/);
      const imgNum = imgMatch ? parseInt(imgMatch[1]) : 1;
      const titleIndex = (imgNum - 1) % items.length;

      setAndAnimateTitle(items[titleIndex]);
      item.style.visibility = "hidden";

      const rect = item.getBoundingClientRect();
      overlay.classList.add("active");

      expandedItem = document.createElement("div");
      // ✅ replaced `.expanded-item` class with Tailwind
      expandedItem.className =
        "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20";
      const img = document.createElement("img");
      img.src = imgSrc;
      img.className = "w-full h-full object-cover";
      expandedItem.appendChild(img);
      expandedItem.addEventListener("click", closeExpandedItem);
      document.body.appendChild(expandedItem);

      itemsGrid.forEach((el) => {
        if (el !== item) gsap.to(el, { opacity: 0, duration: 0.3 });
      });

      gsap.delayedCall(0.5, animateTitleIn);
      gsap.fromTo(
        expandedItem,
        {
          width: itemWidth,
          height: itemHeight,
          x: rect.left + itemWidth / 2 - window.innerWidth / 2,
          y: rect.top + itemHeight / 2 - window.innerHeight / 2,
        },
        {
          width: window.innerWidth * 0.4,
          height: window.innerWidth * 0.48,
          x: 0,
          y: 0,
          duration: 1,
          ease: "hop",
        }
      );
    }

    function closeExpandedItem() {
      animateTitleOut();
      overlay.classList.remove("active");
      if (expandedItem) expandedItem.remove();
      isExpanded = false;
      canDrag = true;
      container.style.cursor = "grab";
      itemsGrid.forEach((el) => (el.style.opacity = "1"));
    }

    // Drag + inertia
    const pointerDown = (x: number, y: number) => {
      if (!canDrag) return;
      isDragging = true;
      startX = x - targetX;
      startY = y - targetY;
      lastX = x;
      lastY = y;
      lastTime = Date.now();
      container.style.cursor = "grabbing";
    };

    const pointerUp = () => {
      if (!canDrag) return;
      isDragging = false;
      container.style.cursor = "grab";
    };

    const pointerMove = (x: number, y: number) => {
      if (!isDragging || !canDrag) return;
      targetX = x - startX;
      targetY = y - startY;

      const now = Date.now();
      const dt = (now - lastTime) / 1000;
      velocityX = (x - lastX) / dt;
      velocityY = (y - lastY) / dt;
      lastX = x;
      lastY = y;
      lastTime = now;
    };

    container.addEventListener("mousedown", (e) => pointerDown(e.clientX, e.clientY));
    window.addEventListener("mouseup", pointerUp);
    window.addEventListener("mousemove", (e) => pointerMove(e.clientX, e.clientY));

    container.addEventListener("touchstart", (e) => {
      const t = e.touches[0];
      pointerDown(t.clientX, t.clientY);
    });
    window.addEventListener("touchend", pointerUp);
    window.addEventListener("touchmove", (e) => {
      const t = e.touches[0];
      pointerMove(t.clientX, t.clientY);
    });

    // Wrap grid logic
    function wrapGrid() {
      itemsGrid.forEach((item) => {
        const left = parseFloat(item.style.left) + currentX;
        const top = parseFloat(item.style.top) + currentY;

        let newLeft = left;
        let newTop = top;

        if (left + itemWidth < -totalWidth / 2) newLeft += totalWidth;
        else if (left - itemWidth > totalWidth * 1.5) newLeft -= totalWidth;

        if (top + itemHeight < -totalHeight / 2) newTop += totalHeight;
        else if (top - itemHeight > totalHeight * 1.5) newTop -= totalHeight;

        item.style.left = `${newLeft - currentX}px`;
        item.style.top = `${newTop - currentY}px`;
      });
    }

    function animate() {
      const friction = 0.9;
      const ease = 0.08;

      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      if (!isDragging) {
        targetX += velocityX * 0.02;
        targetY += velocityY * 0.02;
        velocityX *= friction;
        velocityY *= friction;
      }

      canvas.style.transform = `translate(${currentX}px, ${currentY}px)`;
      wrapGrid();
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <>
      
      <nav className="absolute top-0 left-0 w-screen p-4 flex justify-between z-[1000]">
        <div className="logo text-black text-bodymedium">
          <a href="#">Codegrid</a>
        </div>
        <div className="links text-black text-bodymedium">
          <a href="#">About</a>
        </div>
      </nav>

      
      <div
        ref={containerRef}
        className="relative w-screen h-screen overflow-hidden cursor-grab bg-[#e3e3db] select-none font-sans"
      >
        <div ref={canvasRef} className="absolute will-change-transform"></div>
        
        <div
          ref={overlayRef}
          className="fixed top-0 left-0 w-full h-full bg-[#e3e3db] opacity-0 transition-opacity duration-300 z-10"
        ></div>
      </div>

      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[32px] font-bold z-20">
        <p ref={titleRef}></p>
      </div>
    </>
  );
};

export default AnimatedGrid;
