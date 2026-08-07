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
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
        style={{
          position: "fixed",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,#3b82f660 0%,transparent 70%)",
          top: -120,
          left: -120,
          filter: "blur(70px)",
          zIndex: -2,
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 120, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "easeInOut",
        }}
        style={{
          position: "fixed",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,#8b5cf660 0%,transparent 70%)",
          right: -150,
          bottom: -150,
          filter: "blur(90px)",
          zIndex: -2,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
