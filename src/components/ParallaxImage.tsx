"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface ParallaxImageProps {
  src: string | StaticImageData;
  alt: string;
  strength?: number; // how much the image should move
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, strength = 20 }) => {
  const [transform, setTransform] = useState("translate(0px, 0px)");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * strength;
    const y = ((e.clientY - top) / height - 0.5) * strength;
    setTransform(`translate(${x}px, ${y}px)`);
  };

  const handleMouseLeave = () => {
    setTransform("translate(0px, 0px)");
  };

  return (
    <div
      className="inline-block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        width={300}
        height={300}
        style={{
          transform,
          transition: "transform 0.2s ease-out",
        }}
      />
    </div>
  );
};

export default ParallaxImage;
