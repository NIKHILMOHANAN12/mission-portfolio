// import Image from "next/image";
// import CopyMail from "./CopyMail";

// export default function Footer() {
//   return (
//     <footer className="bg-[#000000] text-white w-full">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-24 py-12">
//         {/* Left Section */}
//         <div>
//           <div className="flex flex-col gap-1">
//             <p className="font-zuume text-h3 uppercase tracking-wide">
//               A Portfolio Showcase by
//             </p>
//             <h2 className="font-zuume text-[96px] mt-[-40px] text-red-600">
//               NIKHIL MOHAN
//             </h2>
//           </div>

//           <div className="flex flex-col gap-2">
//             {/* <p className="mt-6 text-bodymedium text-white">
//               From Kerala, Made with Procrastination & <br />
//               A Cup of Black Tea <span className="inline"><CoffeeIcon size={32} /></span>
//             </p> */}
//             <p className="mt-6 text-bodymedium font-medium text-white">
//               Made with ❤️ & Procrastination<br/>
//               from God's Own Country
//             </p>

//             <p className="text-bodysmall text-neutral-400">
//               Fonts are used under the terms of free license for personal use.{" "}
//               <br />© 2025, Portfolio by Nikhil Mohan. All Rights Reserved
//             </p>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex flex-col items-start md:items-end text-right gap-8">
//           <p className="text-neutral-400 text-bodysmall">
//             ✦ COMPLETELY BUILT USING FIGMA & NEXT.js ✦
//           </p>
//           <div className="flex flex-col items-end gap-6">
//             <div className="flex flex-col gap-2">
//               <p className="text-bodysmall">
//                 You can connect me on my personal mail
//               </p>
//               <CopyMail />
//             </div>
//             <div className="flex flex-col gap-2 items-end">
//               <p className="text-bodysmall text-neutral-400">
//                 or through any of secure channels
//               </p>
//               <div className="flex gap-4">
//                 {/* LinkedIn */}
//                 <a
//                   href="https://www.linkedin.com/in/nikhil-mohann"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="filter grayscale hover:grayscale-0 transition duration-300"
//                 >
//                   <Image
//                     src="/images/linkedin.png"
//                     width={40}
//                     height={40}
//                     alt="LinkedIn"
//                   />
//                 </a>

//                 {/* Instagram */}
//                 <a
//                   href="https://www.instagram.com/nikz_te_mohn/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="filter grayscale hover:grayscale-0 transition duration-300"
//                 >
//                   <Image
//                     src="/images/instagram.png"
//                     width={40}
//                     height={40}
//                     alt="Instagram"
//                   />
//                 </a>

//                 {/* Behance */}
//                 <a
//                   href="https://www.behance.net/nikhilmohan15"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="filter grayscale hover:grayscale-0 transition duration-300"
//                 >
//                   <Image
//                     src="/images/behance.png"
//                     width={40}
//                     height={40}
//                     alt="Behance"
//                   />
//                 </a>

                
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }



import Image from "next/image";
import CopyMail from "./CopyMail";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white w-full">
      <div className="
        grid grid-cols-1 md:grid-cols-2 gap-12
        px-6 sm:px-12 lg:px-24 
        py-10 sm:py-12
      ">
        
        {/* LEFT SECTION */}
        <div className="text-center md:text-left">
          <div className="flex flex-col sm:gap-1">
            <p className="font-zuume text-h5 sm:text-h4 lg:text-h3 uppercase tracking-wide">
              A Portfolio Showcase by
            </p>

            <h2 className="
              font-zuume 
              text-[48px] sm:text-[72px] lg:text-[96px] 
              mt-[-16px] sm:mt-[-28px] lg:mt-[-40px] 
              text-red-600
            ">
              NIKHIL MOHAN
            </h2>
          </div>

          <div className="flex flex-col gap-2 mt-4 sm:mt-6">
            <p className="text-bodysmall sm:text-bodymedium font-medium text-white">
              Made with ❤️ & Procrastination<br/>
              from God's Own Country
            </p>

            <p className="text-xs sm:text-bodysmall text-neutral-400">
              Fonts are used under the terms of free license for personal use.
              <br />© 2025, Portfolio by Nikhil Mohan. All Rights Reserved
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-8">
          
          <p className="text-neutral-400 text-xs sm:text-bodysmall">
            ✦ COMPLETELY BUILT USING FIGMA & NEXT.js ✦
          </p>

          <div className="flex flex-col items-center md:items-end gap-6">
            
            {/* MAIL */}
            <div className="flex flex-col gap-2 items-center md:items-end">
              <p className="text-xs sm:text-bodysmall">
                You can connect me on my personal mail
              </p>
              <CopyMail />
            </div>

            {/* SOCIAL */}
            <div className="flex flex-col gap-2 items-center md:items-end">
              <p className="text-xs sm:text-bodysmall text-neutral-400">
                or through any of the secure channels
              </p>

              <div className="flex gap-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/nikhil-mohann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="filter grayscale hover:grayscale-0 transition duration-300"
                >
                  <Image
                    src="/images/linkedin.png"
                    width={32}
                    height={32}
                    className="sm:w-[36px] sm:h-[36px] lg:w-[40px] lg:h-[40px]"
                    alt="LinkedIn"
                  />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/nikz_te_mohn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="filter grayscale hover:grayscale-0 transition duration-300"
                >
                  <Image
                    src="/images/instagram.png"
                    width={32}
                    height={32}
                    className="sm:w-[36px] sm:h-[36px] lg:w-[40px] lg:h-[40px]"
                    alt="Instagram"
                  />
                </a>

                {/* Behance */}
                <a
                  href="https://www.behance.net/nikhilmohan15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="filter grayscale hover:grayscale-0 transition duration-300"
                >
                  <Image
                    src="/images/behance.png"
                    width={32}
                    height={32}
                    className="sm:w-[36px] sm:h-[36px] lg:w-[40px] lg:h-[40px]"
                    alt="Behance"
                  />
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
