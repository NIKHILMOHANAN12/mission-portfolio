import Image from "next/image";
import CopyMail from "./CopyMail";
import { ArrowUpIcon, CoffeeIcon } from "@phosphor-icons/react";
import BackToTop from "./ScrollToggle";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-24 py-12">
        {/* Left Section */}
        <div>
          <div className="flex flex-col gap-1">
            <p className="font-zuume text-h3 uppercase tracking-wide">
              A Portfolio Showcase by
            </p>
            <h2 className="font-zuume text-[96px] mt-[-40px] text-red-600">
              NIKHIL MOHAN
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            {/* <p className="mt-6 text-bodymedium text-white">
              From Kerala, Made with Procrastination & <br />
              A Cup of Black Tea <span className="inline"><CoffeeIcon size={32} /></span>
            </p> */}
            <p className="mt-6 text-bodymedium font-medium text-white">
              Made with ❤️ & Procrastination<br/>
              from God's Own Country
            </p>

            <p className="text-bodysmall text-neutral-400">
              Fonts are used under the terms of free license for personal use.{" "}
              <br />© 2025, Portfolio by Nikhil Mohan. All Rights Reserved
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start md:items-end text-right gap-8">
          <p className="text-neutral-400 text-bodysmall">
            ✦ COMPLETELY BUILT USING FIGMA & NEXT.js ✦
          </p>
          <div className="flex flex-col items-end gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-bodysmall">
                You can connect me on my personal mail
              </p>
              <CopyMail />
            </div>
            <div className="flex flex-col gap-2 items-end">
              <p className="text-bodysmall text-neutral-400">
                or through any of secure channels
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
                    width={40}
                    height={40}
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
                    width={40}
                    height={40}
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
                    width={40}
                    height={40}
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
