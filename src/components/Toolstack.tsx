// "use client";

// import Image from "next/image";

// const tools = [
//   {
//     icons: ["/Logos/Sketch.svg", "/Logos/XD.svg", "/Logos/Figma.svg"],
//     title: "Figma, XD, Sketch",
//     subtitle: "Wireframing",
//   },
//   {
//     icons: ["/Logos/LottieFile.svg", "/Logos/Jitter.svg", "/Logos/Framer.svg"],
//     title: "Framer, Jitter, LottieFiles",
//     subtitle: "Prototyping & Animation",
//   },
//   {
//     icons: ["/Logos/Ae.svg", "/Logos/Davinci Resolve.svg", "/Logos/Pr.svg"],
//     title: "Premier Pro, Davinci Resolve, After Effects",
//     subtitle: "Video Editing",
//   },
//   {
//     icons: ["/Logos/Next.svg", "/Logos/CSS.svg", "/Logos/HTML.svg"],
//     title: "HTML, CSS, Next.js",
//     subtitle: "Coding Languages",
//   },
//   {
//     icons: ["/Logos/Id.svg", "/Logos/Ai.svg", "/Logos/Ps.svg"],
//     title: "Photoshop, Illustrator, InDesign",
//     subtitle: "Graphic Designing",
//   },
//   {
//     icons: ["/Logos/Notion.svg", "/Logos/Miro.svg", "/Logos/VS.svg"],
//     title: "Visual Studio, Miro, Notion",
//     subtitle: "Other Tools",
//   },
// ];

// export default function ToolsSection() {
//   return (
//     <section data-theme="dark" className="bg-[#0E100F] py-16 px-[96px] text-white mx-auto">
//       <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
//         Tools that help me in
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//         {tools.map((tool, index) => (
//           <div key={index} className="flex items-start space-x-4">
//             {/* Icons */}
//             <div className="flex -space-x-3">
//               {tool.icons.map((icon, i) => (
//                 <div
//                   key={i}
//                   className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-700 cursor-pointer transform transition-transform duration-300 ease-in-out hover:-translate-y-1"
//                 >
//                   <Image
//                     src={icon}
//                     alt={tool.title}
//                     width={40}
//                     height={40}
//                     className="object-contain"
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Text */}
//             <div>
//               <h3 className="text-bodymedium font-semibold text-left">{tool.title}</h3>
//               <p className="text-bodysmall text-neutral-400">{tool.subtitle}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

const tools = [
  {
    icons: ["/Logos/Sketch.svg", "/Logos/XD.svg", "/Logos/Figma.svg"],
    title: "Figma, XD, Sketch",
    subtitle: "Wireframing",
  },
  {
    icons: ["/Logos/LottieFile.svg", "/Logos/Jitter.svg", "/Logos/Framer.svg"],
    title: "Framer, Jitter, LottieFiles",
    subtitle: "Prototyping & Animation",
  },
  {
    icons: ["/Logos/Ae.svg", "/Logos/Davinci Resolve.svg", "/Logos/Pr.svg"],
    title: "Premier Pro, Davinci Resolve, After Effects",
    subtitle: "Video Editing",
  },
  {
    icons: ["/Logos/Next.svg", "/Logos/CSS.svg", "/Logos/HTML.svg"],
    title: "HTML, CSS, Next.js",
    subtitle: "Coding Languages",
  },
  {
    icons: ["/Logos/Id.svg", "/Logos/Ai.svg", "/Logos/Ps.svg"],
    title: "Photoshop, Illustrator, InDesign",
    subtitle: "Graphic Designing",
  },
  {
    icons: ["/Logos/Notion.svg", "/Logos/Miro.svg", "/Logos/VS.svg"],
    title: "Visual Studio, Miro, Notion",
    subtitle: "Other Tools",
  },
];

export default function ToolsSection() {
  return (
    <section
      data-theme="dark"
      className="bg-[#0E100F] py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 text-white"
    >
      <h2 className="text-h6 md:text-h4 font-bold text-center mb-10 md:mb-12">
        Tools that help me in
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
        {tools.map((tool, index) => (
          <div key={index} className="flex items-center space-x-4">
            
            {/* Icons */}
            <div className="flex -space-x-3 sm:-space-x-2">
              {tool.icons.map((icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-gray-700 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1"
                >
                  <Image
                    src={icon}
                    alt={tool.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Text */}
            <div>
              <h3 className="text-bodysmall md:text-bodymedium font-semibold md:font-semibold text-left">
                {tool.title}
              </h3>
              <p className="text-[14px] md:text-bodysmall text-neutral-400">
                {tool.subtitle}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
