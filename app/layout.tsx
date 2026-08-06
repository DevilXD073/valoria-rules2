import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ValoriaSMP Rulebook",
  description: "Official ValoriaSMP Season 3 Rulebook",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
