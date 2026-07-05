import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import LiquidChrome from "@/components/liquid-chrome";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abstracttechvisions.com"),
  title: {
    default: "Abstract Techvisions — Strategy, Systems, Brand & Performance",
    template: "%s · Abstract Techvisions",
  },
  description:
    "We connect strategy, systems, brand and performance into one execution model designed to accelerate your business growth.",
  keywords: [
    "digital transformation",
    "brand marketing",
    "performance marketing",
    "custom software",
    "AI agents",
    "IT operations",
  ],
  openGraph: {
    title: "Abstract Techvisions",
    description:
      "One synchronized system for brand and technology — built to accelerate growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <LiquidChrome />
        {children}
      </body>
    </html>
  );
}
