"use client";

import { motion } from "framer-motion";

export default function QuoteBanner() {
  return (
    <section
      id="quote-banner"
      style={{
        background: "#0a0a0a",
        padding: "120px 80px",
        textAlign: "center",
        width: "100%",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Quote Title */}
        <motion.h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            color: "#FF8000",
            fontWeight: 700,
            marginBottom: "32px",
            lineHeight: 1.1,
            textShadow:
              "0 0 40px rgba(255,128,0,0.2), 0 0 80px rgba(255,128,0,0.1)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          A Relentless Pursuit of Speed
        </motion.h2>

        {/* Quote Body */}
        <motion.p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.65)",
            maxWidth: "700px",
            margin: "0 auto 16px",
            lineHeight: 1.8,
            fontFamily: "var(--font-body)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          The 720S Spider Fury isn&apos;t just a car — it&apos;s a statement.
          Uncompromising aerodynamics, a twin-turbo V8 heart, and a retractable
          roof that opens the world. Built for those who demand everything.
        </motion.p>

        {/* Attribution */}
        <motion.p
          style={{
            fontSize: "0.85rem",
            color: "#FF8000",
            letterSpacing: "0.2em",
            marginBottom: "80px",
            fontFamily: "var(--font-heading)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          — McLaren Automotive
        </motion.p>

        {/* CTA Section */}
        <motion.div
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,128,0,0.15) 0%, transparent 70%)",
            padding: "80px 0",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            style={{
              background: "#FF8000",
              color: "#000000",
              fontFamily: "var(--font-heading)",
              fontSize: "0.85rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontWeight: 700,
              padding: "20px 60px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "#FFA040";
              el.style.transform = "scale(1.03)";
              el.style.boxShadow = "0 0 40px rgba(255,128,0,0.4)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "#FF8000";
              el.style.transform = "scale(1)";
              el.style.boxShadow = "none";
            }}
          >
            CONFIGURE YOURS
          </button>
        </motion.div>
      </div>

      {/* Responsive override */}
      <style jsx global>{`
        @media (max-width: 768px) {
          #quote-banner {
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
