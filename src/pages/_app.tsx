// "use client";

// import "@/styles/globals.css"; // Tailwind + global styles
// import type { AppProps } from "next/app";
// import { Manrope } from "next/font/google";
// import Layout from "./layout/Layout";
// import { AnimatePresence, motion } from "framer-motion";
// import { useRouter } from "next/router";

// const manrope = Manrope({
//   subsets: ["latin"],
//   variable: "--font-manrope",
//   weight: ["400", "500", "600", "700"],
// });

// export default function App({ Component, pageProps }: AppProps) {
//   const router = useRouter();

//   return (
//     <Layout>
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={router.pathname}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.4, ease: "easeInOut" }}
//         >
//           <Component {...pageProps} />
//         </motion.div>
//       </AnimatePresence>
//     </Layout>
//     // </main>
//   );
// }


"use client";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";
import Layout from "./layout/Layout";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import Preloader from "@/components/Preloader"; // <-- import your preloader

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Preloader state
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {!loading && (
        <Layout>
          <AnimatePresence mode="wait">
            <motion.div
              key={router.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      )}
    </>
  );
}
