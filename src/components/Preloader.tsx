// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Preloader({ onFinish }: { onFinish: () => void }) {
//   const VIDEO_DURATION = 4 * 1000; // 4 sec video
//   const ZOOM_START = 3.7 * 1000; // Start zoom + fade at 3 sec

//   const [show, setShow] = useState(true);
//   const [startZoom, setStartZoom] = useState(false);

//   useEffect(() => {
//     // Fade + Zoom starts at 3 sec
//     const zoomTimer = setTimeout(() => {
//       setStartZoom(true);
//     }, ZOOM_START);

//     // Remove preloader fully after zoom completes
//     const finishTimer = setTimeout(() => {
//       setShow(false);
//       setTimeout(onFinish, 800); // wait for exit fade
//     }, ZOOM_START + 800);

//     return () => {
//       clearTimeout(zoomTimer);
//       clearTimeout(finishTimer);
//     };
//   }, [onFinish]);

//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0, transition: { duration: 0.8 } }}
//           className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
//         >
//           <div className="flex flex-col items-center">
//             <p className="mb-4 text-black text-bodysmall font-medium tracking-wide">
//               Ready to dive...
//             </p>

//             {/* ZOOMING + FADING VIDEO BOX */}
//             <motion.div
//               initial={{ scale: 1 }}
//               animate={startZoom ? { scale: 12 } : { scale: 1 }}
//               transition={{ duration: 1, ease: "easeInOut" }}
//               className="w-[440px] h-[280px] overflow-hidden shadow-xl relative"
//             >
//               {/* The video fades out during the last 1 second */}
//               <motion.video
//                 src="/Video/Preloader.mp4"
//                 autoPlay
//                 muted
//                 playsInline
//                 className="w-full h-full object-cover"
//                 initial={{ opacity: 1 }}
//                 animate={startZoom ? { opacity: 0 } : { opacity: 1 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//               />
//             </motion.div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }


"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  const ZOOM_START = 3700; // 3.7s → begin zoom + cloud fade

  const [show, setShow] = useState(true);
  const [startZoom, setStartZoom] = useState(false);

  useEffect(() => {
    const zoomTimer = setTimeout(() => {
      setStartZoom(true);
    }, ZOOM_START);

    const finishTimer = setTimeout(() => {
      setShow(false);
      setTimeout(onFinish, 800);
    }, ZOOM_START + 800);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
        >
          <div className="flex flex-col items-center">
            <p className="mb-4 text-black text-bodysmall font-medium tracking-wide">
              Ready to dive...
            </p>

            {/* ZOOMING VIDEO BOX */}
            <motion.div
              initial={{ scale: 1 }}
              animate={startZoom ? { scale: 12 } : { scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-[440px] h-[280px] overflow-hidden shadow-xl relative"
            >
              {/* VIDEO */}
              <motion.video
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
                  startZoom
                    ? { opacity: 1, "--maskSize": "350%" } // Cloud expands
                    : {}
                }
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
