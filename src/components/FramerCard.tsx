// import Image, { StaticImageData } from "next/image";
// import React, { useState } from "react";

// interface ImgConfig {
//   left: string;
//   top: string;
//   transform: string;
// }

// interface FramerCardProps {
//   hoverRotate?: number; 
//   hoverConfigs?: ImgConfig[]; 
//   images: (string | StaticImageData)[];
// }

// const FramerCard: React.FC<FramerCardProps> = ({
//   hoverRotate = -65,
//   hoverConfigs = [
//     { left: "0%", top: "10%", transform: "rotate(15deg)" },
//     { left: "40%", top: "20%", transform: "rotate(-10deg)" },
//     { left: "20%", top: "-10%", transform: "rotate(0deg)" },
//   ],
//   images,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const baseConfigs: ImgConfig[] = [
//     { left: "calc(50% - 85px)", top: "calc(50% - 60px)", transform: "rotate(6deg)" },
//     { left: "calc(50% - 85px)", top: "calc(50% - 60px)", transform: "rotate(-4deg)" },
//     { left: "calc(50% - 85px)", top: "calc(50% - 60px)", transform: "rotate(0deg)" },
//   ];

//   return (
//     <div
//       className="framerBlockWrap relative"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="framerBlock01"></div>
//       {/* Image Stack */}
//       <div className="framerBlock02 relative w-full h-full">
//         {images.map((imgSrc, i) => (
//           <div
//             key={i}
//             style={{
//               position: "absolute",
//               width: "170px",
//               height: "120px",
//               left: isHovered ? hoverConfigs[i]?.left || baseConfigs[i].left : baseConfigs[i].left,
//               top: isHovered ? hoverConfigs[i]?.top || baseConfigs[i].top : baseConfigs[i].top,
//               transform: isHovered
//                 ? hoverConfigs[i]?.transform || baseConfigs[i].transform
//                 : baseConfigs[i].transform,
//               transition: "all 0.6s cubic-bezier(0.25, 1, 0.3, 1)",
//               // borderRadius: "5.8% / 8.3%",
//               // boxShadow: "rgba(133, 133, 133, 0.25) 0px -1px 2px 0px",
//             }}
//           >
//             <Image src={imgSrc} alt="" fill className="object-cover rounded-md" />
//           </div>
//         ))}
//       </div>

//       {/* Rotating Block */}
//       <div
//         className="framerBlock03 absolute bottom-0 left-0 w-full h-[147px] rounded-lg"
//         style={{
//           transform: isHovered
//             ? `perspective(2500px) rotateX(${hoverRotate}deg)`
//             : "perspective(2500px)",
//           // boxShadow: isHovered
//           //   ? "rgb(255, 255, 255) 0px 0 0px 0px inset"
//           //   : "rgb(255, 255, 255) 0px 2px 0px 0px inset",
//           transition:
//             "transform 0.6s cubic-bezier(0.25, 1, 0.3, 1), box-shadow 0.3s ease-in-out",
//         }}
//       />
//     </div>
//   );
// };

// export default FramerCard;


import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect, useRef } from "react";

interface ImgConfig {
  left: string;
  top: string;
  transform: string;
}

interface FramerCardProps {
  hoverRotate?: number;
  hoverConfigs?: ImgConfig[];
  images: (string | StaticImageData)[];
}

const FramerCard: React.FC<FramerCardProps> = ({
  hoverRotate = -65,
  hoverConfigs = [
    { left: "0%", top: "10%", transform: "rotate(15deg)" },
    { left: "40%", top: "20%", transform: "rotate(-10deg)" },
    { left: "20%", top: "-10%", transform: "rotate(0deg)" },
  ],
  images,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close on outside click (mobile only)
  useEffect(() => {
    if (!isMobile) return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setIsHovered(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMobile]);

  const toggleHover = () => {
    if (isMobile) setIsHovered((prev) => !prev);
  };

  const baseConfigs: ImgConfig[] = [
    { left: "calc(50% - 85px)", top: "calc(50% - 60px)", transform: "rotate(6deg)" },
    { left: "calc(50% - 85px)", top: "calc(50% - 60px)", transform: "rotate(-4deg)" },
    { left: "calc(50% - 85px)", top: "calc(50% - 60px)", transform: "rotate(0deg)" },
  ];

  return (
    <div
      ref={cardRef}
      className="framerBlockWrap relative"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={toggleHover} // toggle on mobile
    >
      <div className="framerBlock01"></div>

      {/* Image Stack */}
      <div className="framerBlock02 relative w-full h-full">
        {images.map((imgSrc, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "170px",
              height: "120px",
              left: isHovered ? hoverConfigs[i]?.left || baseConfigs[i].left : baseConfigs[i].left,
              top: isHovered ? hoverConfigs[i]?.top || baseConfigs[i].top : baseConfigs[i].top,
              transform: isHovered
                ? hoverConfigs[i]?.transform || baseConfigs[i].transform
                : baseConfigs[i].transform,
              transition: "all 0.6s cubic-bezier(0.25, 1, 0.3, 1)",
            }}
          >
            <Image src={imgSrc} alt="" fill className="object-cover rounded-md" />
          </div>
        ))}
      </div>

      {/* Rotating Block */}
      <div
        className="framerBlock03 absolute bottom-0 left-0 w-full h-[147px] rounded-lg"
        style={{
          transform: isHovered
            ? `perspective(2500px) rotateX(${hoverRotate}deg)`
            : "perspective(2500px)",
          transition:
            "transform 0.6s cubic-bezier(0.25, 1, 0.3, 1), box-shadow 0.3s ease-in-out",
        }}
      />
    </div>
  );
};

export default FramerCard;
