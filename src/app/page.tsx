"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Navbar from "@/components/Navbar";
import FuryScrollCanvas from "@/components/FuryScrollCanvas";
import FuryExperience from "@/components/FuryExperience";
import SpecsGrid from "@/components/SpecsGrid";
import Features from "@/components/Features";
import QuoteBanner from "@/components/QuoteBanner";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-mclaren-black">
      <Navbar />

      {/* ── SCROLL SEQUENCE (Locked for 600vh) ── */}
      <section
        ref={containerRef}
        className="h-[600vh] relative"
        aria-label="Interactive car rotation sequence"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Canvas — z-0 */}
          <FuryScrollCanvas
            scrollYProgress={scrollYProgress}
            totalFrames={240}
            imageFolderPath="/images/fury-sequence"
          />

          {/* HUD Overlay — z-10 */}
          <FuryExperience scrollYProgress={scrollYProgress} />

          {/* Vignette overlay for depth */}
          <div
            className="absolute inset-0 pointer-events-none z-5"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.6) 100%)",
            }}
          />
        </div>
      </section>

      {/* ── REST OF SITE (Scrolls naturally after sequence) ── */}
      <div className="relative z-20" style={{ backgroundColor: "#0a0a0a" }}>
        {/* Transition gradient from scroll sequence */}
        <div
          style={{
            height: "128px",
            background:
              "linear-gradient(to bottom, transparent, #0a0a0a)",
          }}
        />

        <SpecsGrid />
        <Features />
        <QuoteBanner />
        <Footer />
      </div>
    </main>
  );
}
