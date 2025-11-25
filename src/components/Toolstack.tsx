// "use client";
// import Image from "next/image";

// interface ToolStackProps {
//   logos: { src: string; alt: string }[];
//   title: string;
//   subtitle: string;
// }

// export default function ToolStack({ logos, title, subtitle }: ToolStackProps) {
//   return (
//     <div className="flex gap-2 items-start">
//       {/* Logo Stack */}
//       <div className="flex -space-x-3">
//         {logos.map((logo, index) => (
//           <Image
//             key={index}
//             src={logo.src}
//             alt={logo.alt}
//             width={40}
//             height={40}
//             className={`rounded-full border-2 border-white shadow-md cursor-pointer transform transition-transform duration-300 ease-in-out hover:-translate-y-1`}
//           />
//         ))}
//       </div>

//       {/* Text */}
//       <div className="flex flex-col items-start">
//         <p className="text-bodymedium font-semibold text-left">{title}</p>
//         <p className="text-bodysmall text-neutral-400">{subtitle}</p>
//       </div>
//     </div>
//   );
// }


"use client";

// app/components/ToolsSection.jsx (Next.js 13+)
// or /components/ToolsSection.js if using pages directory

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
    <section data-theme="dark" className="bg-[#0E100F] py-16 px-[96px] text-white mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Tools that help me in
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {tools.map((tool, index) => (
          <div key={index} className="flex items-start space-x-4">
            {/* Icons */}
            <div className="flex -space-x-3">
              {tool.icons.map((icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-700 cursor-pointer transform transition-transform duration-300 ease-in-out hover:-translate-y-1"
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
              <h3 className="text-bodymedium font-semibold text-left">{tool.title}</h3>
              <p className="text-bodysmall text-neutral-400">{tool.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
