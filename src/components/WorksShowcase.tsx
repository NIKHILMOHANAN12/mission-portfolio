// "use client";

// import { useEffect, useRef } from "react";
// import Button from "./Button";
// import Link from "next/link";
// import Image from "next/image";

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
//   let ctx: any; // or gsap.Context if you type it

//   const loadAnimations = async () => {
//     const gsapModule = await import("gsap");
//     const ScrollTriggerModule = await import("gsap/ScrollTrigger");
//     const gsap = gsapModule.gsap || gsapModule.default;
//     const ScrollTrigger =
//       ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default;

//     gsap.registerPlugin(ScrollTrigger);

//     ctx = gsap.context(() => {
//       const workItems = gsap.utils.toArray<HTMLElement>(".work-item");
//       gsap.set(workItems, { y: 1000 });

//       const rows = document.querySelectorAll(".row");
//       rows.forEach((row) => {
//         const items = row.querySelectorAll(".work-item");

//         items.forEach((item, idx) => {
//           const isLeft = idx === 0;
//           gsap.set(item, {
//             rotation: isLeft ? -60 : 60,
//             transformOrigin: "center center",
//           });
//         });

//         ScrollTrigger.create({
//           trigger: row,
//           start: "top 60%",
//           once: true,
//           onEnter: () => {
//             gsap.to(items, {
//               y: 0,
//               rotation: 0,
//               duration: 1,
//               ease: "power4.out",
//               stagger: 0.25,
//             });
//           },
//         });
//       });
//     }, containerRef);
//   };

//   loadAnimations();

//   // ✅ Proper cleanup
//   return () => {
//     if (ctx) ctx.revert();
//   };
// }, []);


//   // ✅ Generate rows
//   const generateRows = () => {
//     const rows = [];
//     for (let i = 0; i < projects.length; i += 2) {
//       const leftItem = projects[i];
//       const rightItem = projects[i + 1];

//       rows.push(
//         <div className="row flex justify-between gap-4" key={i}>
//           <WorkItem project={leftItem} />
//           {rightItem && <WorkItem project={rightItem} />}
//         </div>
//       );
//     }
//     return rows;
//   };

//   return (
//     <section ref={containerRef} className="work flex flex-col gap-16 w-full mx-auto">
//       {generateRows()}
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
//     <div className="work-item flex flex-col justify-start flex-1">
//       <div className="work-item-img w-full overflow-hidden">
//         {/* <img
//           src={project.img}
//           alt={project.title}
//           className="w-full h-[402px] object-cover block rounded-lg"
//         /> */}

//         <Image
//           src={project.img}
//           alt={project.title}
//           width={800}
//           height={402}
//           className="w-full h-[402px] object-cover block rounded-lg"
//           loading="lazy"
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



"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import { Variants } from "framer-motion";


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
  return (
    <section className="work flex flex-col gap-12 w-full mx-auto">
      {generateRows()}
    </section>
  );
}

const generateRows = () => {
  const rows = [];

  for (let i = 0; i < projects.length; i += 2) {
    const left = projects[i];
    const right = projects[i + 1];

    rows.push(
      <motion.div
        key={i}
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="row grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6"
      >
        <WorkItem project={left} index={0} />
        {right && <WorkItem project={right} index={1} />}
      </motion.div>
    );
  }

  return rows;
};

const rowVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

// const itemVariants = {
//   hidden: (isLeft: boolean) => ({
//     y: 200,
//     rotate: isLeft ? -60 : 60,
//     opacity: 0,
//   }),
//   visible: {
//     y: 0,
//     rotate: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       ease: [0.16, 1, 0.3, 1], // matches GSAP power4.out
//     },
//   },
// };

const itemVariants: Variants = {
  hidden: (custom: boolean) => ({
    y: 200,
    rotate: custom ? -60 : 60,
    opacity: 0,
  }),
  visible: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};


type Project = {
  chips: string[];
  title: string;
  img: string;
  slug: string;
};

function WorkItem({ project, index }: { project: Project; index: number }) {
  const isLeft = index === 0;

  return (
    <motion.div
      className="work-item flex flex-col flex-1"
      variants={itemVariants}
      custom={isLeft}
    >
      <div className="w-full overflow-hidden rounded-lg">
        <Image
          src={project.img}
          alt={project.title}
          width={800}
          height={450}
          className="w-full h-[260px] sm:h-[320px] md:h-[402px] object-cover"
          loading="lazy"
        />
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {project.chips.map((chip, idx) => (
            <span
              key={idx}
              className="text-sm tracking-wide bg-[#adadad1a] px-3 py-1 rounded-md font-medium"
            >
              {chip}
            </span>
          ))}
        </div>

        <h3 className="font-semibold text-lg md:text-xl">{project.title}</h3>

        <Button href={project.slug}>View Case Study</Button>
      </div>
    </motion.div>
  );
}
