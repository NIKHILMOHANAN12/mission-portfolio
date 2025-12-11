"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  const CLOUD_START = 3600; // Cloud fade start time (3.7s)
  const TOTAL_DURATION = CLOUD_START + 500;

  const [show, setShow] = useState(true);
  const [startCloudFade, setStartCloudFade] = useState(false);

  useEffect(() => {
    const cloudTimer = setTimeout(() => {
      setStartCloudFade(true);
    }, CLOUD_START);

    const finishTimer = setTimeout(() => {
      setShow(false);
      setTimeout(onFinish, 800);
    }, TOTAL_DURATION);

    return () => {
      clearTimeout(cloudTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
        >
          <div className="flex flex-col items-center">
            <p className="mb-4 text-black text-[14px] md:text-bodysmall font-medium tracking-wide">
              Ready to dive...
            </p>

            {/* VIDEO BOX — ZOOM REMOVED */}
            <div className="w-[220px] md:w-[440px] h-[140px] md:h-[280px] overflow-hidden relative">

              {/* VIDEO */}
              <video
                src="/Video/Preloader.mp4"
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              {/* CLOUD FADE OVERLAY */}
              <motion.div
                className="absolute inset-0 pointer-events-none cloud-mask"
                initial={{ opacity: 0, "--maskSize": "20%" } as any}
                animate={
                  startCloudFade
                    ? { opacity: 1, "--maskSize": "350%" }
                    : {}
                }
                transition={{ duration: 1, ease: [0, 0, 0.58, 1] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
