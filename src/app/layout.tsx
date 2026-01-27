import type { Metadata } from "next";
import { Syne, DM_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Antimony Labs | Robotics & AI Research",
  description:
    "Advanced research lab specializing in robotics, AI-driven tools, and cutting-edge automation solutions. Trusted by Tesla, Meta, Applied Materials, and GoPro.",
  keywords: [
    "robotics",
    "AI",
    "machine learning",
    "automation",
    "research lab",
    "embedded systems",
  ],
  openGraph: {
    title: "Antimony Labs | Robotics & AI Research",
    description:
      "Engineering the future of intelligent machines. Advanced R&D in robotics and AI.",
    url: "https://antimonylabs.com",
    siteName: "Antimony Labs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth w-full">
      <body
        className={`${syne.variable} ${dmMono.variable} ${instrumentSerif.variable} antialiased w-full min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
