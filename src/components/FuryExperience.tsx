"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

interface FuryExperienceProps {
  scrollYProgress: MotionValue<number>;
}

/* ── Transition preset ── */
const panelTransition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

export default function FuryExperience({
  scrollYProgress,
}: FuryExperienceProps) {
  /* ── Phase opacities ── */
  const heroOpacity = useTransform(scrollYProgress, [0, 0.33], [1, 0]);
  const aeroOpacity = useTransform(
    scrollYProgress,
    [0.28, 0.38, 0.61, 0.71],
    [0, 1, 1, 0]
  );
  const engineOpacity = useTransform(scrollYProgress, [0.61, 0.71], [0, 1]);

  /* ── Visibility toggles (prevents ghost clicks / invisible overlap) ── */
  const heroVis = useTransform(scrollYProgress, (v) =>
    v > 0.36 ? ("hidden" as const) : ("visible" as const)
  );
  const aeroVis = useTransform(scrollYProgress, (v) =>
    v < 0.26 || v > 0.74 ? ("hidden" as const) : ("visible" as const)
  );
  const engineVis = useTransform(scrollYProgress, (v) =>
    v < 0.59 ? ("hidden" as const) : ("visible" as const)
  );

  /* ── Subtle Y translations ── */
  const heroY = useTransform(scrollYProgress, [0, 0.33], [0, -20]);
  const aeroY = useTransform(
    scrollYProgress,
    [0.28, 0.38, 0.61, 0.71],
    [20, 0, 0, -20]
  );
  const engineY = useTransform(scrollYProgress, [0.61, 0.71], [20, 0]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      {/* ── Persistent top-center phase nav ── */}
      <PhaseNav scrollYProgress={scrollYProgress} />

      {/* ── Persistent bottom scroll progress ── */}
      <ScrollProgress scrollYProgress={scrollYProgress} />

      {/* ══════════ PHASE 1: HERO ══════════ */}
      <motion.div
        style={{
          opacity: heroOpacity,
          y: heroY,
          visibility: heroVis,
          position: "absolute",
          inset: 0,
        }}
      >
        {/* Bottom-left: eyebrow + title + subtext + CTA */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 48,
            maxWidth: 600,
          }}
        >
          <motion.p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#FF8000",
              marginBottom: 8,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...panelTransition, delay: 0.3 }}
          >
            THE APEX PREDATOR
          </motion.p>

          <motion.h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              color: "white",
              textTransform: "uppercase",
              marginBottom: 16,
              textShadow:
                "0 0 30px rgba(255,128,0,0.2), 0 0 60px rgba(255,128,0,0.08)",
            }}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ...panelTransition, delay: 0.5 }}
          >
            McLaren
            <br />
            720S Spider Fury
          </motion.h1>

          <motion.div
            style={{
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
              marginBottom: 20,
              fontFamily: "var(--font-body)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...panelTransition, delay: 0.8 }}
          >
            <p>Where aerodynamics meet British precision.</p>
            <p>Ultra-lightweight engineering, nothing more.</p>
          </motion.div>

          <motion.a
            href="#"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#FF8000",
              display: "flex",
              alignItems: "center",
              gap: 8,
              pointerEvents: "auto",
              textDecoration: "none",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...panelTransition, delay: 1.0 }}
          >
            CONFIGURE YOURS{" "}
            <span style={{ fontSize: "1rem" }}>→</span>
          </motion.a>
        </div>

        {/* Top-right: price block */}
        <motion.div
          style={{
            position: "absolute",
            top: 80,
            right: 48,
            textAlign: "right",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...panelTransition, delay: 0.6 }}
        >
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
            }}
          >
            £ 250,000
          </p>
          <p
            style={{
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.15em",
              marginBottom: 12,
              fontFamily: "var(--font-body)",
              textTransform: "uppercase",
            }}
          >
            Inclusive of applicable taxes
          </p>
          <button
            style={{
              border: "1px solid rgba(255,255,255,0.4)",
              padding: "6px 14px",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "white",
              background: "transparent",
              cursor: "pointer",
              fontFamily: "var(--font-body)",
              pointerEvents: "auto",
            }}
          >
            CONTACT DEALER
          </button>
        </motion.div>

        {/* Bottom-right: phase number */}
        <PhaseNumber number="01" />
      </motion.div>

      {/* ══════════ PHASE 2: AERODYNAMICS ══════════ */}
      <motion.div
        style={{
          opacity: aeroOpacity,
          y: aeroY,
          visibility: aeroVis,
          position: "absolute",
          inset: 0,
        }}
      >
        {/* Bottom-left: eyebrow + title + subtext + CTA */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 48,
            maxWidth: 600,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#FF8000",
              marginBottom: 8,
            }}
          >
            A NEW GENERATION OF AERO DESIGN.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              color: "white",
              textTransform: "uppercase",
              marginBottom: 16,
              textShadow:
                "0 0 30px rgba(255,128,0,0.2), 0 0 60px rgba(255,128,0,0.08)",
            }}
          >
            Aerodynamics
          </h2>

          <div
            style={{
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
              marginBottom: 20,
              fontFamily: "var(--font-body)",
            }}
          >
            <p>Carbon Fibre Monocoque II-S forms every surface.</p>
            <p>Every duct, every vent — functional perfection.</p>
          </div>

          <a
            href="#"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#FF8000",
              display: "flex",
              alignItems: "center",
              gap: 8,
              pointerEvents: "auto",
              textDecoration: "none",
            }}
          >
            DISCOVER DESIGN{" "}
            <span style={{ fontSize: "1rem" }}>→</span>
          </a>
        </div>

        {/* Bottom-right: phase number */}
        <PhaseNumber number="02" />
      </motion.div>

      {/* ══════════ PHASE 3: ENGINE ══════════ */}
      <motion.div
        style={{
          opacity: engineOpacity,
          y: engineY,
          visibility: engineVis,
          position: "absolute",
          inset: 0,
        }}
      >
        {/* Bottom-left: eyebrow + title + subtext + CTA */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 48,
            maxWidth: 600,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#FF8000",
              marginBottom: 8,
            }}
          >
            DREW ON F1 RACING EXPERIENCE.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              color: "white",
              textTransform: "uppercase",
              marginBottom: 16,
              textShadow:
                "0 0 30px rgba(255,128,0,0.2), 0 0 60px rgba(255,128,0,0.08)",
            }}
          >
            Engine
          </h2>

          <div
            style={{
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
              marginBottom: 20,
              fontFamily: "var(--font-body)",
            }}
          >
            <p>The twin-turbocharged 4.0L V8 produces 720PS.</p>
            <p>Derived from McLaren&apos;s racing DNA.</p>
          </div>

          <a
            href="#"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#FF8000",
              display: "flex",
              alignItems: "center",
              gap: 8,
              pointerEvents: "auto",
              textDecoration: "none",
            }}
          >
            DISCOVER ENGINE{" "}
            <span style={{ fontSize: "1rem" }}>→</span>
          </a>
        </div>

        {/* Right-side: Engine spec panel */}
        <div
          style={{
            position: "absolute",
            right: 48,
            top: "50%",
            transform: "translateY(-50%)",
            textAlign: "right",
            borderLeft: "1px solid rgba(255,128,0,0.4)",
            paddingLeft: 24,
            overflow: "hidden",
          }}
        >
          {/* POWER label */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(255,128,0,0.6)",
              marginBottom: 12,
            }}
          >
            POWER
          </p>

          {/* Big spec numbers row */}
          <div
            style={{
              display: "flex",
              gap: 24,
              marginBottom: 24,
            }}
          >
            {[
              { value: "720", unit: "PS" },
              { value: "770", unit: "NM" },
              { value: "2.9", unit: "SEC" },
            ].map((spec, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {spec.value}
                </p>
                <p
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-body)",
                    marginTop: 4,
                  }}
                >
                  {spec.unit}
                </p>
              </div>
            ))}
          </div>

          {/* Spec detail rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {[
              { label: "Configuration", value: "4.0L Twin-Turbo V8" },
              { label: "Transmission", value: "7-Speed SSG" },
              { label: "Dry Weight", value: "1,332 KG (DRY)" },
              { label: "Power/Weight", value: "540 PS/TONNE" },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 24,
                  fontSize: "0.7rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                <span
                  style={{
                    color: "rgba(255,128,0,0.7)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {row.label}
                </span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    textAlign: "right",
                    letterSpacing: "0.05em",
                  }}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom-right: phase number */}
        <PhaseNumber number="03" />
      </motion.div>
    </div>
  );
}

/* ══════════════════════════════════════
   SUB-COMPONENTS
   ══════════════════════════════════════ */

/** Top-center phase navigation: 01 START · 02 DESIGN · 03 ENGINE */
function PhaseNav({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const activePhase = useTransform(scrollYProgress, (v) => {
    if (v < 0.33) return 1;
    if (v < 0.66) return 2;
    return 3;
  });

  const steps = [
    { num: "01", label: "START" },
    { num: "02", label: "DESIGN" },
    { num: "03", label: "ENGINE" },
  ];

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 90,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 40,
        zIndex: 20,
      }}
    >
      {steps.map((step, i) => (
        <PhaseNavItem
          key={i}
          num={step.num}
          label={step.label}
          index={i + 1}
          activePhase={activePhase}
        />
      ))}
    </motion.div>
  );
}

/** Individual phase nav step — reactive to activePhase */
function PhaseNavItem({
  num,
  label,
  index,
  activePhase,
}: {
  num: string;
  label: string;
  index: number;
  activePhase: MotionValue<number>;
}) {
  const color = useTransform(activePhase, (v) =>
    v === index ? "#FF8000" : "rgba(255,255,255,0.35)"
  );
  const fontWeight = useTransform(activePhase, (v) =>
    v === index ? 600 : 400
  );

  return (
    <motion.span
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.65rem",
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        color,
        fontWeight,
        whiteSpace: "nowrap",
      }}
    >
      {num}&ensp;{label}
    </motion.span>
  );
}

/** Bottom-right phase number with decorative box */
function PhaseNumber({ number }: { number: string }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 80,
        right: 48,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 8,
      }}
    >
      {/* Small vertical progress line */}
      <div
        style={{
          width: 1,
          height: 32,
          background:
            "linear-gradient(to bottom, rgba(255,128,0,0.5), transparent)",
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "0.65rem",
          letterSpacing: "0.3em",
          color: "rgba(255,255,255,0.25)",
        }}
      >
        ◻ {number}
      </span>
    </div>
  );
}

/** Bottom-of-screen scroll progress bar */
function ScrollProgress({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 2,
        background: "rgba(255,255,255,0.05)",
        zIndex: 20,
      }}
    >
      <motion.div
        style={{
          height: "100%",
          background: "linear-gradient(to right, #FF8000, #FFA040)",
          width,
        }}
      />
    </div>
  );
}
