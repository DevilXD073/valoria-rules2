import type { Metadata } from "next";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import ProgressBar from "@/components/ProgressBar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import ThemeToggle from "@/components/ThemeToggle";
export const metadata: Metadata = {
  title: "ValoriaSMP Rulebook",
  description: "Official ValoriaSMP Rulebook",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <AnimatedBackground />
        <ParticleBackground />
        <ProgressBar />
        <Navbar />
        {children}
        <Footer />
        <ScrollTop />
        <ThemeToggle />
      </body>
    </html>
  );
}
