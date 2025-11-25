// import Image from "next/image";
// import Button from "./Button";
// import { IconBase, OfficeChairIcon } from "@phosphor-icons/react";

// export default function Intro() {
//   return (
//     <div>
//       {/* <section className="text-center px-8 max-w-6xl mx-auto py-16 min-h-screen ">
//         <p className="text-bodymedium font-medium text-neutral-700 ">
//           Let’s start with a quick intro!
//         </p>
//         <h1 className="mt-8 mb-12 text-h3 font-semibold px-14 text-neutral-900">
//           “Hi, I’m Nikhil!
//           <span className="inline-block align-middle mt-[-10px]">
//             <Image src="/Icons/Profile.svg" alt="Figma Logo" width={56} height={56} className="rounded-lg border-[3px] border-white border-solid shadow-[0_8px_30px_rgba(0,0,0,0.22)] rotate-[-3deg] z-30 -mr-4 "/>
//           </span>
//            A UI/UX Designer with 3+ years of experience in B2B and SaaS. Currently working as UX Engineer at
//           <div className="relative inline-flex items-center align-middle w-14 left-3">
//             <Image src="/Icons/Ospyn.png" alt="Ospyn Technologies Logo" width={40} height={40} className="rounded-lg rotate-[-4deg] z-30 -mr-6"/>
//           </div>
//           <span className="inline-block align-middle mt-[-10px]">
//             <Image src="/Icons/Profile.svg" alt="Figma Logo" width={56} height={56} className="rounded-lg border-[3px] border-white border-solid shadow-[0_8px_30px_rgba(0,0,0,0.22)] rotate-[-3deg] z-30 -mr-4 "/>
//           </span>
//           Ospyn Technologies, based in Trivandrum, Kerala”
//         </h1>
//         <Button>More About Me</Button>
//       </section> */}

//       <section className="text-center flex flex-col justify-center px-8 max-w-6xl mx-auto min-h-screen ">
//         <p className="text-bodysmall font-semibold text-neutral-700 ">Let’s start with a quick intro!</p>
//         <h2 className="mt-10 mb-4 text-h2 font-bold">Hey, I'm
//           <span className="inline-block align-middle mt-[-10px] ml-[6px] mr-[6px]">
//             <Image src="/Icons/Profile.svg" alt="Figma Logo" width={64} height={64} className="rounded-lg border-[3px] border-white border-solid shadow-[0_8px_30px_rgba(0,0,0,0.22)] rotate-[-3deg] z-30 -mr-4 "/>
//           </span>
//           Nikhil!</h2>
//         <h3 className="text-h4 font-semibold">An Engineer turned designer with<br/>over 3+ years of experience in B2B & SaaS.</h3>
//         <div className="flex items-center gap-2 text-center justify-center mt-10">
//           <OfficeChairIcon size={24} weight="fill" />
//           <p className="text-bodymedium">Currently working at <b>Ospyn Technologies</b> in Trivandrum, Kerala</p>
//         </div>
//         <div className="mt-6">
//           <Button>More About Me</Button>
//         </div>
//       </section>
//     </div>

//   );
// }

"use client";
import { OfficeChairIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      data-theme="light"
      className="relative flex flex-col items-center justify-center min-h-screen text-center "
    >
      {/* Background Text */}
      <div className="absolute -z-10 px-4">
        <h1
          className="font-bold select-none bgtext text-[22vw]
    text-gray-100 opacity-70"
        >
          Designer
        </h1>
      </div>

      {/* Logo */}
      {/* <div className="mb-4">
        <Image
          src="/images/letter.png"
          width={80}
          height={80}
          alt="Logo"
          className="mx-auto rounded-3xl"
        />
      </div> */}
      {/* Icons Row */}
      <div className="px-14 max-w-6xl mx-auto">
        <Link href="/about" className="flex justify-center">
          <div className="relative flex items-center justify-center group mb-4 w-40 cursor-pointer">
            <span
              className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 text-xs text-white bg-gray-800 rounded-md whitespace-nowrap pointer-events-none opacity-0 scale-95 translate-y-2 
      group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 
      transition-all duration-300 ease-out"
            >
              Click to reveal me!
              <span className="absolute left-1/2 -bottom-1.5 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-800"></span>
            </span>

            {/* Left Icon */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 z-0 flex items-center justify-center shadow-md transition-transform duration-500 group-hover:-translate-x-4 group-hover:-rotate-12">
              <Image
                src="/Icons/Creative Logo.svg"
                width={40}
                height={40}
                alt="Creative"
                className="rounded-md"
              />
            </div>

            {/* Center Circle Icon */}
            <div className="flex items-center justify-center shadow-md rounded-full z-10">
              <Image
                src="/Icons/Short Bio.svg"
                width={64}
                height={64}
                alt="Reveal Icon"
                className="rounded-full"
              />
            </div>

            {/* Right Icon */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-0 flex items-center justify-center shadow-md transition-transform duration-500 group-hover:translate-x-4 group-hover:rotate-12">
              <Image
                src="/Icons/Designer Logo.svg"
                width={40}
                height={40}
                alt="Designer Logo Icon"
                className="rounded-md"
              />
            </div>
          </div>
        </Link>

        {/* Subtitle */}
        <p className="text-gray-500 text-bodysmall">
          Let’s start with a quick intro of me!
        </p>

        {/* Main Heading */}
        <h2 className="text-2xl md:text-h3 font-semibold leading-tight mt-12">
          Hey I'm Nikhil, An Engineer turned Designer with over 3+ years of
          experience in B2B & SaaS.
        </h2>

        {/* Bottom small text with icon */}
        <div className="flex items-center justify-center gap-2 mt-6 text-bodysmall">
          <OfficeChairIcon size={20} />
          <span>
            Currently working at <b>Ospyn Technologies</b> in Trivandrum,
            Kerala.
          </span>
        </div>
      </div>
    </section>
  );
}
