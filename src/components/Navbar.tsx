// "use client";
// import {
//   DetectiveIcon,
//   FlaskIcon,
//   IdentificationBadgeIcon,
//   TreasureChestIcon,
// } from "@phosphor-icons/react";
// import Link from "next/link";
// import React from "react";
// import ScrollToggle from "./ScrollToggle";

// const menuItems = [
//   { title: "Works", icon: TreasureChestIcon, href: "/#myWork" },
//   { title: "About Me", icon: DetectiveIcon, href: "/about" },
//   { title: "Play", icon: FlaskIcon, href: "/" },
//   { title: "Resume", icon: IdentificationBadgeIcon, href: "/" },
// ];

// const Navbar = () => {
//   return (
//     <div>
//       <div className="fixed navBlock gap-2 bottom-10 z-50 left-0 right-0 mx-auto w-fit flex justify-center bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.075)] border p-3 px-6">
//         {menuItems.map(({ title, icon: Icon, href }) => (
//           <Link
//             key={title}
//             href={href}
//             className=" text-gray-600 hover:text-black transition"
//           >
//             <div className="flex items-center px-3 py-2 rounded-md hover:bg-[#000000] hover:text-white transition-colors duration-300">
//               <span className="nav-icon">
//               <Icon size={24} weight="duotone" />
//               </span>
//               <span className="nav-icon-text text-xs ml-2">{title}</span>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>

//   );
// };

// export default Navbar;


"use client";
import {
  DetectiveIcon,
  FlaskIcon,
  IdentificationBadgeIcon,
  TreasureChestIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import React, { useState } from "react";

const menuItems = [
  { title: "Works", icon: TreasureChestIcon, href: "/#myWork" },
  { title: "About Me", icon: DetectiveIcon, href: "/about" },
  { title: "Play", icon: FlaskIcon, href: "/play" },
  { title: "Resume", icon: IdentificationBadgeIcon, href: "/Nikhil Mohan-Resume.pdf", external: true },
];

const Navbar = () => {
  return (
    <div>
      <div className="fixed navBlock gap-2 bottom-10 z-50 left-0 right-0 mx-auto w-fit flex justify-center bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.075)] border p-3 px-6">
        {menuItems.map(({ title, icon: Icon, href, external }) => 
          external ? (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition"
            >
              <div className="group flex items-center px-3 py-2 rounded-md hover:bg-black transition-colors duration-300">
                <span className="nav-icon">
                  <Icon
                    size={24}
                    weight="duotone"
                    className="group-hover:hidden"
                  />
                  <Icon
                    size={24}
                    weight="fill"
                    className="hidden group-hover:inline"
                  />
                </span>
                <span className="nav-icon-text text-xs ml-2">{title}</span>
              </div>
            </a>
          ) : (
          <Link
            key={title}
            href={href}
            className="text-gray-600 hover:text-white transition"
          >
            <div className="group flex items-center px-3 py-2 rounded-md hover:bg-black transition-colors duration-300">
              <span className="nav-icon">
                {/* Icon switches weight on hover */}
                <Icon
                  size={24}
                  weight="duotone"
                  className="group-hover:hidden"
                />
                <Icon
                  size={24}
                  weight="fill"
                  className="hidden group-hover:inline"
                />
              </span>
              <span className="nav-icon-text text-xs ml-2">{title}</span>
            </div>
          </Link>
        )
)}
      </div>
    </div>
  );
};

export default Navbar;
