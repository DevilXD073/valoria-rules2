"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "fixed",
          top: -180,
          left: -180,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,#3b82f655 0%,transparent 70%)",
          filter: "blur(80px)",
          zIndex: -2,
          pointerEvents: "none",
        }}
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "fixed",
          right: -180,
          bottom: -180,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,#8b5cf655 0%,transparent 70%)",
          filter: "blur(100px)",
          zIndex: -2,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
