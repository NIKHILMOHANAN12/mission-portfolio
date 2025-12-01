// "use client";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

// export default function Reveal({
//   children,
//   bg = "#ffffff", // Default = white (home + all other pages)
// }: {
//   children: React.ReactNode;
//   bg?: string;       // Optional background override
// }) {
//   const controls = useAnimation();

//   const [ref, inView] = useInView({
//     triggerOnce: false,
//     threshold: 0.35,
//   });

//   useEffect(() => {
//     if (inView) controls.start("visible");
//     else controls.start("hidden");
//   }, [inView]);

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       style={{
//         backgroundColor: bg, // Fade from page-specific background
//       }}
//       variants={{
//         hidden: {
//           opacity: 0,
//           y: 40,
//           transition: { duration: 0.4, ease: "easeOut" },
//         },
//         visible: {
//           opacity: 1,
//           y: 0,
//           transition: { duration: 0.7, ease: "easeOut" },
//         },
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }

"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Reveal({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();

  // Remove triggerOnce → so it works on scroll up also
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.35, // Adjust how deep user must scroll before it reveals
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // fade-out when going back
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
          transition: { duration: 0.5, ease: "easeOut" },
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
