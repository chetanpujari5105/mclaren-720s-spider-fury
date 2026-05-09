"use client";

import { motion } from "framer-motion";
import { carData } from "@/data/carData";

export default function SpecsGrid() {
  return (
    <section
      id="specs-section"
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
          style={{ marginBottom: "64px" }}
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
              marginBottom: "12px",
            }}
          >
            TECHNICAL SPECIFICATION
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              color: "white",
              textTransform: "uppercase",
              marginBottom: "16px",
              lineHeight: 1.1,
            }}
          >
            BY THE NUMBERS
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "400px",
              lineHeight: 1.6,
              fontFamily: "var(--font-body)",
            }}
          >
            Every figure meticulously engineered. Every number a testament to
            uncompromising performance.
          </p>
        </motion.div>

        {/* 4-Column Data Table Grid */}
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "40px",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {carData.specsGrid.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              {/* Column Header */}
              <div
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.25em",
                  color: "#FF8000",
                  textTransform: "uppercase",
                  paddingBottom: "8px",
                  borderBottom: "1px solid #FF8000",
                  marginBottom: "16px",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {group.category}
              </div>

              {/* Data Rows */}
              <div>
                {group.items.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      padding: "6px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.45)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "white",
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Responsive override */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          #specs-section > div > div:last-of-type {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          #specs-section {
            padding: 80px 24px !important;
          }
          #specs-section > div > div:last-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
