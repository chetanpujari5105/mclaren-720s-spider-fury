import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "McLaren 720S Spider Fury | The Pinnacle of Performance",
  description:
    "Experience the McLaren 720S Spider Fury — a masterpiece of aerodynamic precision, raw power, and open-air exhilaration. 4.0L Twin-Turbo V8. 720PS. 0–60 in 2.9s.",
  keywords: [
    "McLaren",
    "720S",
    "Spider Fury",
    "supercar",
    "luxury",
    "sports car",
    "V8",
    "twin-turbo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${rajdhani.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
