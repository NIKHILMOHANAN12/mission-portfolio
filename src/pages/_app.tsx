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
              transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      )}
    </LazyMotion>
  );
}
