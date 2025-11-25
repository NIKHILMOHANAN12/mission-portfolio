"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function PlayPage() {
  useEffect(() => {
    // Handle image click to open in new tab
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach((tile) => {
      tile.addEventListener("click", () => {
        const img = tile.querySelector("img") as HTMLImageElement | null;
        if (img && img.src) window.open(img.src, "_blank");
      });
    });

    return () => {
      tiles.forEach((tile) => {
        tile.replaceWith(tile.cloneNode(true)); // remove listeners on unmount
      });
    };
  }, []);

  const images = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/img${i + 1}.jpg`, // ✅ stored locally in /public/images
  alt: `tile ${i + 1}`,
}));


  return (
    <div className="min-h-screen flex flex-col">
      {/* Main */}
      <main className="max-w-6xl mx-auto px-8 py-16">
        <div className="flex flex-col text-center gap-1 mb-6">
          <h1 className="font-zuume sm:text-[44px]  md:text-[43px]  lg:text-[64px] leading-tight lg:leading-none text-center">Playground</h1>
          <p className="text-bodymedium font-regular text-center">A space where I experiment, break rules, and play with design ideas.</p>
        </div>
        <div className="flex gap-4 text-center justify-center mb-6">
          <div className="px-3 py-2 bg-slate-200 rounded-lg font-medium text-bodysmall">UI Mockups</div>
          <div className="px-3 py-2 bg-slate-200 rounded-lg font-medium text-bodysmall">Posters</div>
          <div className="px-3 py-2 bg-slate-200 rounded-lg font-medium text-bodysmall">Brochures</div>
          <div className="px-3 py-2 bg-slate-200 rounded-lg font-medium text-bodysmall">Banners</div>
          <div className="px-3 py-2 bg-slate-200 rounded-lg font-medium text-bodysmall">Films</div>
        </div>
        

        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]" id="gallery">
          {images.map(({ src, alt }) => (
            <div
              key={alt}
              className="tile relative overflow-hidden rounded-xl bg-gradient-to-b from-[#fafafa] to-white min-h-[160px] flex items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              {/* You can use next/image or <img>, both work */}
              <Image
                src={src}
                alt={alt}
                width={800}
                height={600}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

// function NavLink({
//   href,
//   children,
//   active = false,
// }: {
//   href: string;
//   children: React.ReactNode;
//   active?: boolean;
// }) {
//   return (
//     <Link
//       href={href}
//       className={`py-1 px-2 transition-colors ${
//         active
//           ? "underline decoration-[1.5px] underline-offset-2"
//           : "hover:text-gray-600"
//       }`}
//     >
//       {children}
//     </Link>
//   );
// }
