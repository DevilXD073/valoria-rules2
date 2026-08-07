import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import ProgressBar from "@/components/ProgressBar";
import ScrollTop from "@/components/ScrollTop";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "ValoriaSMP Rulebook",
  description:
    "Official ValoriaSMP Season 3 Rulebook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        {/* Reading Progress */}
        <ProgressBar />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        {children}

        {/* Floating Buttons */}
        <ScrollTop />
        <ThemeToggle />
      </body>
    </html>
  );
}
