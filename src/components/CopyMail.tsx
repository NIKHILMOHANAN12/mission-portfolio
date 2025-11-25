"use client";
import { useState } from "react";
import { CopyIcon, CopySimple } from "@phosphor-icons/react";

export default function CopyMail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("iamnikhilmohanan@gmail.com");
      setCopied(true);

      // Reset after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="items-center rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      {/* Inner container with black background */}
      <div className="flex items-center justify-center bg-[#000000] rounded-full gap-2">
        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="text-white relative flex gap-2 justify-center items-center cursor-pointer overflow-hidden rounded-full px-4 py-2 transition duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]"
        >
          <CopyIcon size={24} weight="regular" />

          <span className="text-white text-bodysmall font-semibold">
            iamnikhilmohanan@gmail.com
          </span>

          {/* Shiny looping effect */}
          {/* <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer"></span> */}

          {/* Popup */}
          {copied && (
            <span className="absolute left-1/2 -translate-x-1/2 top-10 bg-white text-black text-xs rounded-lg px-2 py-1 shadow-md whitespace-nowrap z-10">
              Mail ID copied to clipboard!
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
