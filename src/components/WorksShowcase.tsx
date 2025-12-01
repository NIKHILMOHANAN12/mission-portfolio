"use client";

import { useEffect, useRef } from "react";
import Button from "./Button";
import Link from "next/link";

const projects = [
  {
    chips: ["DESIGN SYSTEM", "DEV HANDOFF"],
    title: "Designing Consistency: Crafting Ospyn’s First Design System",
    img: "/images/Design-System-Thumbnail.jpg",
    slug: "/case-study-1",
  },
  {
    chips: ["0 → 1 DESIGN", "NGO OPS"],
    title: "Rise of a Volunteer Management App",
    img: "/images/Volunteer-App-Thumbnail.jpg",
    slug: "/case-study-2",
  },
  {
    chips: ["ED-TECH", "GAMIFIED UX"],
    title: "Learning from Learners: A UX Story",
    img: "/images/Learning-App-Thumbnail.jpg",
    slug: "/case-study-3",
  },
  {
    chips: ["FINTECH", "DEV HAND-OFF"],
    title: "Crafting a Smooth Trade Finance Dashboard Experience",
    img: "/images/Trade-Finance-Thumbnail.jpg",
    slug: "/case-study-4",
  },
];

export default function WorksShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // ✅ Import GSAP only on client side
    const loadAnimations = async () => {
      const gsapModule = await import("gsap");
      const ScrollTriggerModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.gsap || gsapModule.default;
      const ScrollTrigger = ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default;

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const workItems = gsap.utils.toArray<HTMLElement>(".work-item");
        gsap.set(workItems, { y: 1000 });

        const rows = document.querySelectorAll(".row");
        rows.forEach((row) => {
          const items = row.querySelectorAll(".work-item");
          items.forEach((item, idx) => {
            const isLeft = idx === 0;
            gsap.set(item, {
              rotation: isLeft ? -60 : 60,
              transformOrigin: "center center",
            });
          });

          ScrollTrigger.create({
            trigger: row,
            start: "top 60%",
            onEnter: () => {
              gsap.to(items, {
                y: 0,
                rotation: 0,
                duration: 1,
                ease: "power4.out",
                stagger: 0.25,
              });
            },
          });
        });
      }, containerRef);

      return () => ctx.revert();
    };

    loadAnimations();
  }, []);

  // ✅ Generate rows
  const generateRows = () => {
    const rows = [];
    for (let i = 0; i < projects.length; i += 2) {
      const leftItem = projects[i];
      const rightItem = projects[i + 1];

      rows.push(
        <div className="row flex justify-between gap-4" key={i}>
          <WorkItem project={leftItem} />
          {rightItem && <WorkItem project={rightItem} />}
        </div>
      );
    }
    return rows;
  };

  return (
    <section ref={containerRef} className="work flex flex-col gap-16 w-full mx-auto">
      {generateRows()}
    </section>
  );
}

type Project = {
  chips: string[];
  title: string;
  img: string;
  slug: string;
};

function WorkItem({ project }: { project: Project }) {
  return (
    <div className="work-item flex flex-col justify-start flex-1">
      <div className="work-item-img w-full overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-[402px] object-cover block rounded-lg"
        />
      </div>
      <div className="work-item-copy mt-6 flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {project.chips.map((chip, index) => (
            <span
              key={index}
              className="text-[14px] tracking-wide bg-[#adadad1a] px-3 py-1 rounded-md font-medium"
            >
              {chip}
            </span>
          ))}
        </div>
        <div className="flex gap-3 flex-col">
          <h3 className="font-semibold text-h6">{project.title}</h3>
    
          <div>
            <Button href={project.slug}>View Case Study</Button>
          </div>
          
        </div>
        
        
      </div>
    </div>
  );
}

// "use client";

// import { useEffect, useRef } from "react";
// import Button from "./Button";
// import Link from "next/link";

// const projects = [
//   {
//     chips: ["DESIGN SYSTEM", "DEV HANDOFF"],
//     title: "Designing Consistency: Crafting Ospyn’s First Design System",
//     img: "/images/Design-System-Thumbnail.jpg",
//     slug: "/case-study-1",
//   },
//   {
//     chips: ["0 → 1 DESIGN", "NGO OPS"],
//     title: "Rise of a Volunteer Management App",
//     img: "/images/Volunteer-App-Thumbnail.jpg",
//     slug: "/case-study-2",
//   },
//   {
//     chips: ["ED-TECH", "GAMIFIED UX"],
//     title: "Learning from Learners: A UX Story",
//     img: "/images/Learning-App-Thumbnail.jpg",
//     slug: "/case-study-3",
//   },
//   {
//     chips: ["FINTECH", "DEV HAND-OFF"],
//     title: "Crafting a Smooth Trade Finance Dashboard Experience",
//     img: "/images/Trade-Finance-Thumbnail.jpg",
//     slug: "/case-study-4",
//   },
// ];

// export default function WorksShowcase() {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const loadAnimations = async () => {
//       const gsapModule = await import("gsap");
//       const ScrollTriggerModule = await import("gsap/ScrollTrigger");
//       const gsap = gsapModule.gsap || gsapModule.default;
//       const ScrollTrigger =
//         ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default;

//       gsap.registerPlugin(ScrollTrigger);

//       const ctx = gsap.context(() => {
//         const workItems = gsap.utils.toArray<HTMLElement>(".work-item");
//         gsap.set(workItems, { y: 1000 });

//         const rows = document.querySelectorAll(".row");
//         rows.forEach((row) => {
//           const items = row.querySelectorAll(".work-item");

//           items.forEach((item, idx) => {
//             gsap.set(item, {
//               rotation: idx % 2 === 0 ? -60 : 60,
//               transformOrigin: "center center",
//             });
//           });

//           ScrollTrigger.create({
//             trigger: row,
//             start: "top 60%",
//             onEnter: () => {
//               gsap.to(items, {
//                 y: 0,
//                 rotation: 0,
//                 duration: 1,
//                 ease: "power4.out",
//                 stagger: 0.25,
//               });
//             },
//           });
//         });
//       }, containerRef);

//       return () => ctx.revert();
//     };

//     loadAnimations();
//   }, []);

//   return (
//     <section ref={containerRef} className="work flex flex-col gap-16 w-full mx-auto">
//       {/* Grid layout - responsive */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//         {projects.map((project, index) => (
//           <div key={index} className="row">
//             <WorkItem project={project} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// type Project = {
//   chips: string[];
//   title: string;
//   img: string;
//   slug: string;
// };

// function WorkItem({ project }: { project: Project }) {
//   return (
//     <div className="work-item flex flex-col justify-start w-full">
//       <div className="work-item-img w-full overflow-hidden">
//         <img
//           src={project.img}
//           alt={project.title}
//           className="w-full h-[280px] sm:h-[340px] md:h-[380px] lg:h-[402px] object-cover block rounded-lg"
//         />
//       </div>

//       <div className="work-item-copy mt-6 flex flex-col gap-3">
//         <div className="flex flex-wrap gap-2">
//           {project.chips.map((chip, index) => (
//             <span
//               key={index}
//               className="text-[14px] tracking-wide bg-[#adadad1a] px-3 py-1 rounded-md font-medium"
//             >
//               {chip}
//             </span>
//           ))}
//         </div>

//         <div className="flex gap-3 flex-col">
//           <h3 className="font-semibold text-h6">{project.title}</h3>

//           <div>
//             <Button href={project.slug}>View Case Study</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
