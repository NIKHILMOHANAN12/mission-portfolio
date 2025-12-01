// import Navbar from '@/components/Navbar'
// import OpenToWorkTag from '@/components/Opentowork'
// import Image from 'next/image'
// import Link from 'next/link';
// import { usePathname } from "next/navigation";

// const Header = () => {
//   const pathname = usePathname();
//   const isDark = pathname === "/about";
  
//   return (
//     <div className='flex items-center justify-between px-6'>
//       <div>
//         <Link href="/">
//           <Image src={isDark ? "/Logos/Brand Logo-White.svg" : "/Logos/Brand Logo-Black.svg"} alt="Portfolio Logo" width={40} height={40} className='fixed top-4 left-6 z-50 h-8 w-auto'/>
//         </Link>
//       </div>
      
//       <div>
//         <Navbar />
//       </div>
//       <div>
//         <OpenToWorkTag/>
//       </div>
//     </div>
//   )
// }

// export default Header



"use client";

import Navbar from "@/components/Navbar";
import OpenToWorkTag from "@/components/Opentowork";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icon library
import MobileNavbar from "@/components/MobileNavbar";

const Header = () => {
  const pathname = usePathname();
  const isDark = pathname === "/about";

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ---- TOP FIXED HEADER ---- */}
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/">
            <Image
              src={
                isDark
                  ? "/Logos/Brand Logo-White.svg"
                  : "/Logos/Brand Logo-Black.svg"
              }
              alt="Portfolio Logo"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navbar */}
          <div className="hidden md:block">
            <Navbar />
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden z-50"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={30} />
          </button>

          {/* <div className="mt-8">
          <OpenToWorkTag />
        </div> */}
        </div>
      </header>

      {/* ---- MOBILE FULL SCREEN MENU ---- */}
      <div
        className={`fixed inset-0 bg-white z-[999] flex flex-col items-center justify-center transition-all duration-500 ease-in-out
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Close Icon */}
        <button
          className="absolute top-6 right-6"
          onClick={() => setMenuOpen(false)}
        >
          <X size={34} />
        </button>

        {/* Full Menu Items (your Navbar component) */}
        <div className="text-center space-y-8 text-h4 font-semibold">
          <MobileNavbar onNavigate={() => setMenuOpen(false)} />

        </div>

        {/* Optional Open To Work tag on mobile */}
        
      </div>
    </>
  );
};

export default Header;
