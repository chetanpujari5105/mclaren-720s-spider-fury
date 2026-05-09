"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  // Prevent hydration mismatch: only render after mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* ── McLaren Wordmark ── */}
        <a
          href="#"
          id="nav-logo"
          className="flex items-center gap-3 group"
        >
          <div className="relative flex items-center gap-0.5">
            {/* Speed mark */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              className="text-mclaren-orange transition-transform duration-300 group-hover:scale-110"
            >
              <path
                d="M14 2L2 14l12 12 12-12L14 2z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M14 7L7 14l7 7 7-7-7-7z"
                fill="currentColor"
                opacity="0.2"
              />
            </svg>
          </div>
          <span
            className="font-[var(--font-heading)] text-sm md:text-base tracking-[0.35em] font-semibold text-white"
          >
            McLAREN
          </span>
        </a>

        {/* ── Navigation Links (hidden on mobile) ── */}
        <div className="hidden lg:flex items-center gap-8">
          {["Models", "Innovation", "Ownership", "Motorsport"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-[var(--font-body)] text-xs tracking-[0.2em] uppercase text-hud-dim hover:text-mclaren-orange transition-colors duration-300 relative group/link"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-mclaren-orange transition-all duration-300 group-hover/link:w-full" />
            </a>
          ))}
        </div>

        {/* ── Configure CTA ── */}
        <a
          href="#"
          id="nav-configure-btn"
          className="relative px-5 py-2 md:px-6 md:py-2.5 border border-mclaren-orange/40 hover:border-mclaren-orange text-mclaren-orange font-[var(--font-heading)] text-[10px] md:text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:bg-mclaren-orange/10 group/btn"
        >
          CONFIGURE
          <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-mclaren-orange opacity-60 transition-opacity group-hover/btn:opacity-100" />
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-mclaren-orange opacity-60 transition-opacity group-hover/btn:opacity-100" />
        </a>
      </div>
    </motion.nav>
  );
}
