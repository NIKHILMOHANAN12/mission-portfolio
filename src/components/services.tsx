// import React from "react";

// import FramerCard from "@/components/FramerCard";
// // import demo01Img from "../../public/images/cardd.png";
// // import demo02Img from "../../public/images/home-banner.jpg";
// // import demo03Img from "../../public/images/dummy.png";
// import folderImg1 from "../../public/images/Figma Sticker.svg";
// import folderImg2 from "../../public/images/Mobile-app-mockup.svg";
// import folderImg3 from "../../public/images/web-mockup.svg";
// import folderImg4 from "../../public/images/React Sticker.svg";
// import folderImg5 from "../../public/images/development-mockup.svg";
// import folderImg6 from "../../public/images/css-mockup.svg";
// import folderImg7 from "../../public/images/Photoshop Sticker.svg";
// import folderImg8 from "../../public/images/designing-mockup.svg";
// import folderImg9 from "../../public/images/design-mockup.svg";
// import folderImg10 from "../../public/images/Premiere Sticker.svg";
// import folderImg11 from "../../public/images/editing-mockup.svg";
// import folderImg12 from "../../public/images/timeline-mockup.svg";

// const services: string[] = [
//   "Web & App Design",
//   "Web Development",
//   "Graphic Design",
//   "Video Editing",
// ];
// const cardConfigs = [
//   {
//     images: [folderImg3, folderImg2, folderImg1],
//   },
//   {
//     images: [folderImg6, folderImg5, folderImg4],
//   },
//   {
//     images: [folderImg9, folderImg8, folderImg7],
//   },
//   {
//     images: [folderImg12, folderImg11, folderImg10],
//   },
// ];

// export default function Services() {
//   return (
//     <section data-theme="light" className="text-center max-w-6xl mx-auto px-6 py-16">
//       <div className="flex flex-col items-center gap-2 mb-20">
//         <h2 className="text-h4 font-bold text-center">
//           So what can I do for your Mission?
//         </h2>
//         <p className="text-bodymedium font-regular">
//           Whether it’s design, development, or creative direction, here’s what I
//           can apply to bring your ideas to life.
//         </p>
//       </div>
      
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">

//          {cardConfigs.map((cfg, i) => (
//           <FramerCard key={i} images={cfg.images} />
//         ))}

//       </div>
//     </section>
//   );
// }

import React from "react"; 
import FramerCard from "@/components/FramerCard";

import folderImg1 from "../../public/images/Figma Sticker.svg";
import folderImg2 from "../../public/images/Mobile-app-mockup.svg";
import folderImg3 from "../../public/images/web-mockup.svg";
import folderImg4 from "../../public/images/React Sticker.svg";
import folderImg5 from "../../public/images/development-mockup.svg";
import folderImg6 from "../../public/images/css-mockup.svg";
import folderImg7 from "../../public/images/Photoshop Sticker.svg";
import folderImg8 from "../../public/images/designing-mockup.svg";
import folderImg9 from "../../public/images/design-mockup.svg";
import folderImg10 from "../../public/images/Premiere Sticker.svg";
import folderImg11 from "../../public/images/editing-mockup.svg";
import folderImg12 from "../../public/images/timeline-mockup.svg";

const services = [
  "Web & App Design",
  "Web Development",
  "Graphic Design",
  "Video Editing",
];

const cardConfigs = [
  { images: [folderImg3, folderImg2, folderImg1] },
  { images: [folderImg6, folderImg5, folderImg4] },
  { images: [folderImg9, folderImg8, folderImg7] },
  { images: [folderImg12, folderImg11, folderImg10] },
];

export default function Services() {
  return (
    <section
      data-theme="light"
      className="text-center max-w-6xl mx-auto px-6 py-16"
    >
      <div className="flex flex-col items-center gap-2 mb-20">
        <h2 className="text-h4 font-bold text-center">
          So what can I do for your Mission?
        </h2>
        <p className="text-bodymedium font-regular">
          Whether it’s design, development, or creative direction, here’s what I
          can apply to bring your ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
        {cardConfigs.map((cfg, i) => (
          <div key={i} className="flex flex-col items-center gap-1 relative service-wrap">
            <FramerCard images={cfg.images} />
            <p className="text-bodysmall service-block font-medium text-neutral-900 absolute ">
              {services[i]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
