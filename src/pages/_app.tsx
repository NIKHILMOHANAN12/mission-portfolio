// // "use client";

// // import "@/styles/globals.css";
// // import type { AppProps } from "next/app";
// // import { Manrope } from "next/font/google";
// // import Layout from "./layout/Layout";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { useRouter } from "next/router";
// // import { useState } from "react";
// // import Preloader from "@/components/Preloader"; // <-- import your preloader

// // const manrope = Manrope({
// //   subsets: ["latin"],
// //   variable: "--font-manrope",
// //   weight: ["400", "500", "600", "700"],
// // });

// // export default function App({ Component, pageProps }: AppProps) {
// //   const router = useRouter();

// //   // Preloader state
// //   const [loading, setLoading] = useState(true);

// //   return (
// //     <>
// //       {loading && <Preloader onFinish={() => setLoading(false)} />}

// //       {!loading && (
// //         <Layout>
// //           <AnimatePresence mode="wait">
// //             <motion.div
// //               key={router.pathname}
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               transition={{ duration: 0.4, ease: "easeInOut" }}
// //             >
// //               <Component {...pageProps} />
// //             </motion.div>
// //           </AnimatePresence>
// //         </Layout>
// //       )}
// //     </>
// //   );
// // }


// "use client";

// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { Manrope } from "next/font/google";
// import Layout from "./layout/Layout";
// import { AnimatePresence, motion } from "framer-motion";
// import { useRouter } from "next/router";
// import { useState, useRef } from "react"; 
// import Preloader from "@/components/Preloader";


// export default function App({ Component, pageProps }: AppProps) {
//   const router = useRouter();

//   const [loading, setLoading] = useState(true);
  
//   const isInitialLoad = useRef(true); 

//   // ⭐️ NEW: Use useEffect to set the ref to false after the first load
//   if (loading && !isInitialLoad.current) {
//     // If we're somehow in a loading state after the initial load, fix it.
//     setLoading(false);
//   }

//   // Set the flag to false after the first render (if we are not loading)
//   if (!loading && isInitialLoad.current) {
//       isInitialLoad.current = false;
//   }
  
//   // NOTE: The preloader's onFinish callback handles setting loading to false.
  
//   // Use a variable to decide if the Preloader should be rendered
//   const shouldRenderPreloader = isInitialLoad.current; 

//   return (
//     // ⭐️ CHANGE 1: Use the ref to conditionally render the Preloader
//     <>
//       {shouldRenderPreloader && <Preloader onFinish={() => setLoading(false)} />}

//       {/* ⭐️ CHANGE 2: Ensure the content only renders AFTER the preloader is done */}
//       {!loading && (
//         <Layout>
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={router.pathname}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//             >
//               <Component {...pageProps} />
//             </motion.div>
//           </AnimatePresence>
//         </Layout>
//       )}
//     </>
//   );
// }


// "use client";

// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { Manrope } from "next/font/google";
// import Layout from "./layout/Layout";
// import { AnimatePresence, motion, LazyMotion, domAnimation } from "framer-motion";
// import { useRouter } from "next/router";
// import { useState, useRef } from "react"; 
// import Preloader from "@/components/Preloader";

// export default function App({ Component, pageProps }: AppProps) {
//   const router = useRouter();

//   const [loading, setLoading] = useState(true);
//   const isInitialLoad = useRef(true);

//   if (loading && !isInitialLoad.current) {
//     setLoading(false);
//   }

//   if (!loading && isInitialLoad.current) {
//     isInitialLoad.current = false;
//   }

//   const shouldRenderPreloader = isInitialLoad.current;

//   return (
//     <LazyMotion features={domAnimation}>
//       {shouldRenderPreloader && <Preloader onFinish={() => setLoading(false)} />}

//       {!loading && (
//         <Layout>
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={router.pathname}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//             >
//               <Component {...pageProps} />
//             </motion.div>
//           </AnimatePresence>
//         </Layout>
//       )}
//     </LazyMotion>
//   );
// }


"use client";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";
import Layout from "./layout/Layout";
import { AnimatePresence, motion, LazyMotion, domAnimation } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react"; 
import Preloader from "@/components/Preloader";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [showPreloader, setShowPreloader] = useState<boolean | null>(null);

  // Run only on client
  useEffect(() => {
    const hasVisited = localStorage.getItem("visited");

    if (hasVisited) {
      setShowPreloader(false);   // Already visited — don't show preloader
    } else {
      setShowPreloader(true);    // First visit — show preloader
      localStorage.setItem("visited", "true");
    }
  }, []);

  if (showPreloader === null) return null; // avoid hydration mismatch

  return (
    <LazyMotion features={domAnimation}>
      {showPreloader && <Preloader onFinish={() => setShowPreloader(false)} />}

      {!showPreloader && (
        <Layout>
          <AnimatePresence mode="wait">
            <motion.div
              key={router.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      )}
    </LazyMotion>
  );
}
