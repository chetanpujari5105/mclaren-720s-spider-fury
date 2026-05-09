"use client";

import { motion } from "framer-motion";
import { carData } from "@/data/carData";

const supportLinks = ["Contact", "Dealers", "Service", "Press"];

export default function Footer() {
  const { footer } = carData;

  return (
    <footer
      id="footer"
      style={{
        background: "#050505",
        padding: "80px 80px 40px",
        borderTop: "1px solid rgba(255,128,0,0.2)",
        width: "100%",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* 4-Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "60px",
          }}
        >
          {/* ── COL 1 — Brand ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              {/* Diamond icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF8000"
                strokeWidth="1.5"
              >
                <polygon points="12 2 22 12 12 22 2 12" />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.2rem",
                  color: "white",
                  letterSpacing: "0.15em",
                  fontWeight: 700,
                }}
              >
                McLAREN
              </span>
            </div>

            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.7,
                maxWidth: "220px",
                fontFamily: "var(--font-body)",
              }}
            >
              McLaren Automotive — pioneers of innovation since 1963.
              <br />
              Every car we build carries the spirit of relentless pursuit.
            </p>
          </motion.div>

          {/* ── COL 2 — Explore ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: "#FF8000",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              EXPLORE
            </h4>
            <div>
              {footer.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: "10px",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.5)";
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── COL 3 — Support ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: "#FF8000",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              SUPPORT
            </h4>
            <div>
              {supportLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: "10px",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.5)";
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── COL 4 — Stay Connected ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: "#FF8000",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              STAY CONNECTED
            </h4>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "16px",
                lineHeight: 1.6,
              }}
            >
              Be the first to experience the next chapter.
            </p>
            <div style={{ display: "flex", gap: "0" }}>
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                aria-label="Email address"
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "white",
                  padding: "10px 16px",
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.1em",
                  outline: "none",
                  borderRight: "none",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#FF8000";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.15)";
                }}
              />
              <button
                aria-label="Subscribe"
                style={{
                  background: "#FF8000",
                  border: "none",
                  width: "36px",
                  height: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "black",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                →
              </button>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom Copyright Bar ── */}
        <div
          style={{
            marginTop: "60px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.1em",
              fontFamily: "var(--font-body)",
            }}
          >
            {footer.copyright}
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: "0.7rem",
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                  fontFamily: "var(--font-body)",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.6)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.25)";
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive override */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          #footer > div > div:first-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          #footer {
            padding: 60px 24px 30px !important;
          }
          #footer > div > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          #footer > div > div:last-child {
            flex-direction: column !important;
            gap: 16px !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
