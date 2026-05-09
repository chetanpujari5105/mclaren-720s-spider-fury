"use client";

import { motion } from "framer-motion";
import { carData } from "@/data/carData";

const iconMap: Record<string, React.ReactNode> = {
  chassis: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Hexagon icon for Monocage */}
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="8.5" x2="22" y2="8.5" />
    </svg>
  ),
  suspension: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Activity/pulse icon for Proactive Chassis */}
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  steering: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Settings/gear icon for steering */}
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  roof: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Chevrons-up icon for Retractable Hardtop */}
      <polyline points="17 11 12 6 7 11" />
      <polyline points="17 18 12 13 7 18" />
    </svg>
  ),
};

export default function Features() {
  return (
    <section
      id="features-section"
      style={{
        background: "#0a0a0a",
        padding: "120px 80px",
        width: "100%",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section Header */}
        <motion.div
          style={{ marginBottom: "64px", textAlign: "center" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: "#FF8000",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            ENGINEERING MASTERY
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "white",
              textTransform: "uppercase",
              lineHeight: 1.1,
            }}
          >
            BEYOND PERFORMANCE
          </h2>
        </motion.div>

        {/* Features Grid — 2 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "32px",
          }}
        >
          {carData.features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "8px",
                padding: "32px",
                display: "grid",
                gridTemplateColumns: "48px 1fr",
                gap: "20px",
                transition: "border-color 0.4s ease, background 0.4s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,128,0,0.3)";
                el.style.background = "#151515";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.background = "#111111";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  color: "rgba(255,128,0,0.6)",
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "4px",
                }}
              >
                {iconMap[feature.icon]}
              </div>

              {/* Content */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#FF8000",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.7,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Responsive override */}
      <style jsx global>{`
        @media (max-width: 768px) {
          #features-section {
            padding: 80px 24px !important;
          }
          #features-section > div > div:last-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
