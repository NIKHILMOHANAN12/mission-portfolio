"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Reveal({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,   // 🔥 only animate once
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0, 0, 0.58, 1] }}
    >
      {children}
    </motion.div>
  );
}
