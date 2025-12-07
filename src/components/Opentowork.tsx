"use client";
import { XCircleIcon } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import Button from "./Button";

export default function OpenToWork() {
  const [mounted, setMounted] = useState(false); // whether popup is mounted
  const [isOpen, setIsOpen] = useState(false); // whether popup is in "open" animation state
  const ANIM_MS = 300; // must match animation durations below

  const openPopup = () => {
    setMounted(true);
    // Let the popup mount, then trigger open animation on next frame
    requestAnimationFrame(() => setIsOpen(true));
  };

  const closePopup = () => {
    // trigger closing animation
    setIsOpen(false);
    // unmount after animation ends
    setTimeout(() => setMounted(false), ANIM_MS + 20);
  };

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) closePopup();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Inline CSS keyframes/classes (keeps everything self-contained)
  const styles = `
  @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
  @keyframes fadeOut { from { opacity: 1 } to { opacity: 0 } }
  @keyframes popupIn { from { opacity: 0; transform: translateY(8px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
  @keyframes popupOut { from { opacity: 1; transform: translateY(0) scale(1); } to { opacity: 0; transform: translateY(8px) scale(.98); } }

  .animate-fadeIn { animation: fadeIn ${ANIM_MS}ms ease-out forwards; }
  .animate-fadeOut { animation: fadeOut ${ANIM_MS}ms ease-in forwards; }
  .animate-popupIn { animation: popupIn ${ANIM_MS}ms cubic-bezier(.2,.9,.3,1) forwards; }
  .animate-popupOut { animation: popupOut ${ANIM_MS}ms cubic-bezier(.4,.0,.2,1) forwards; }
  `;

  return (
    <>
      <style>{styles}</style>

      {/* Floating button */}
      <div className="fixed top-4 right-6 z-50">
        <div
          onClick={openPopup}
          className="group flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow-md border backdrop-blur-md cursor-pointer transition-all duration-300 hover:bg-green-600 hover:shadow-[0_0_0_4px_rgba(34,197,94,0.28)] hover:border-transparent"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          <span className="w-3 h-3 rounded-full bg-green-600 animate-pulse group-hover:bg-white" />
          <div className="relative w-[90px] h-5 overflow-hidden">
            <span className="absolute inset-0 flex items-center justify-start text-sm font-medium text-gray-800 transition-all duration-300 ease-in-out group-hover:-translate-y-6">
              Open to Work
            </span>
            <span className="absolute inset-0 flex items-center justify-start text-sm font-medium text-white translate-y-6 transition-all duration-300 ease-in-out group-hover:-translate-y-0">
              Work with me
            </span>
          </div>
        </div>
      </div>

      {/* Popup (mounted only while needed) */}
      {mounted && (
        <div
          // overlay: click on this closes popup
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-white/60 backdrop-blur-lg ${
            isOpen ? "animate-fadeIn" : "animate-fadeOut"
          }`}
          onClick={closePopup}
          aria-hidden={!isOpen}
        >
          {/* popup card (stopPropagation so clicking inside doesn't close) */}
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className={`relative bg-white rounded-xl p-4 shadow-xl border border-gray-200 max-w-2xl w-full mx-4 overflow-hidden transform ${
              isOpen ? "animate-popupIn" : "animate-popupOut"
            }`}
          >
            {/* Close button */}

            {/* <div className="flex justify-end mb-2">
              <button
                onClick={() => setIsOpen(false)}
                className="text-red-500 hover:text-red-800"
              >
                <XCircleIcon size={28} weight="fill" />
              </button>
            </div> */}

            <div className="absolute top-6 right-6 z-10">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-50 hover:text-gray-300"
              >
                <XCircleIcon size={28} weight="fill" />
              </button>
            </div>

            {/* top image area */}
            <div className="relative">
              <video
                autoPlay
                loop
                muted
    
                className="w-full h-full object-cover rounded-xl"
              >
                <source src="/Video/Ethan-Hunt-Trust.mp4" type="video/mp4" />
              </video>
            </div>

            {/* content */}
            <div className="p-2 text-center">
              <h2 className="text-h6 font-bold mt-2">Let’s Build Something Worthy of a Mission!</h2>
              <p className="text-bodysmall font-medium mb-4">
                "I can be your designer - transforming ideas into intuitive, high-impact user experiences through research-driven design."
              </p>

              
                <Button href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhilmohan@gmail.com"
  target="_blank"
  rel="noopener noreferrer">
                
                Connect me via Mail!
                </Button>
            

              <div className="mt-2 text-bodysmall text-gray-500">
                or via
                  <a href="https://www.linkedin.com/in/nikhil-mohann" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-500 text-bodysmall"> LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
