"use client";

import { useMemo } from "react";

export default function ParticleBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 35 }, (_, i) => ({
        id: i,
        size: Math.random() * 6 + 3,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 8,
        duration: Math.random() * 12 + 10,
      })),
    []
  );

  return (
    <>
      <div className="particle-bg">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .particle-bg {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: -1;
        }

        .particle {
          position: absolute;
          border-radius: 999px;
          background: linear-gradient(#3b82f6, #8b5cf6);
          opacity: 0.35;
          animation: float infinite ease-in-out;
          box-shadow: 0 0 18px #3b82f6;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: .2;
          }

          50% {
            transform: translateY(-80px);
            opacity: .7;
          }

          100% {
            transform: translateY(0px);
            opacity: .2;
          }
        }
      `}</style>
    </>
  );
}
