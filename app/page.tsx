import Image from "next/image";
import { SplineScene } from "@/components/SplineScene";
import { CosmicLandmarks } from "@/components/CosmicLandmarks";
import { Eye, Snowflake, Compass } from "lucide-react";
import { SystemTelemetry } from "@/components/SystemTelemetry";

export default function Home() {
  return (
    <>
      {/* ── Top Navigation Bar ── */}
      <nav
        id="top-nav"
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-20 bg-surface/60 backdrop-blur-xl border-b border-surface-variant/30 shadow-ambient-gold"
      >
        <div className="text-xl font-black tracking-tighter text-primary-container font-headline">
          JWST OBSERVER
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <a
            id="nav-mission"
            href="#hero"
            className="text-primary-container border-b-2 border-primary-container pb-1 font-headline tracking-[-0.02em] uppercase font-bold text-sm"
          >
            MISSION
          </a>
          <a
            id="nav-capabilities"
            href="#capabilities"
            className="text-on-surface/70 hover:text-primary-container hover:bg-white/5 transition-all font-headline tracking-[-0.02em] uppercase font-bold text-sm px-2 py-1"
          >
            CAPABILITIES
          </a>
          <a
            id="nav-gallery"
            href="#gallery"
            className="text-on-surface/70 hover:text-primary-container hover:bg-white/5 transition-all font-headline tracking-[-0.02em] uppercase font-bold text-sm px-2 py-1"
          >
            GALLERY
          </a>
          <a
            id="nav-data"
            href="#telemetry"
            className="text-on-surface/70 hover:text-primary-container hover:bg-white/5 transition-all font-headline tracking-[-0.02em] uppercase font-bold text-sm px-2 py-1"
          >
            DATA
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            id="deep-space-link-btn"
            className="hidden md:flex items-center gap-2 bg-primary-container text-on-primary px-4 py-2 rounded-sm font-label text-sm uppercase tracking-[0.1em] font-bold hover:bg-primary transition-colors"
          >
            <span>DEEP SPACE LINK</span>
          </button>
        </div>
      </nav>

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative w-full h-screen overflow-hidden flex items-center justify-center p-4 md:p-8"
      >
        {/* Hero Background Image */}
        <Image
          src="/images/jwst-hero-2.jpg"
          alt="High-resolution rendering of the James Webb Space Telescope with its golden hexagonal mirrors deployed in deep space above Earth"
          fill
          className="object-cover mix-blend-screen opacity-60 z-0"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(227,176,75,0.05)_0%,transparent_70%)] z-10 pointer-events-none" />
        {/* Bottom Fade to blend with next section */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-surface to-transparent z-10 pointer-events-none" />

        <div className="relative z-20 w-full max-w-[1600px] flex justify-between items-center h-full">
          {/* Hero Content */}
          <div className="relative z-20 max-w-2xl flex flex-col gap-6 mt-16">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-surface-container-high/80 backdrop-blur-sm border border-outline-variant/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow opacity-80" />
              <span className="font-label text-xs uppercase tracking-[0.1em] text-primary">
                System Online
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-[-0.02em] leading-tight drop-shadow-lg">
              TRAVEL <br />
              <span className="text-primary-container">13.5 BILLION</span>{" "}
              YEARS.
            </h1>

            {/* Subtext */}
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-md drop-shadow-md">
              Exploring the deep past with the James Webb Space Telescope. A
              real-time 3D exploration of our cosmic origins.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <button
                id="launch-mission-btn"
                className="bg-primary-container text-on-primary px-6 py-3 rounded-sm font-label text-sm uppercase tracking-[0.1em] font-bold hover:bg-primary transition-colors"
              >
                Launch Mission
              </button>
              <button
                id="view-spec-btn"
                className="bg-surface/50 backdrop-blur-sm border border-outline-variant/50 text-primary px-6 py-3 rounded-sm font-label text-sm uppercase tracking-[0.1em] font-bold hover:bg-surface-container-high transition-colors hover:shadow-ambient-gold-strong"
              >
                View Spec Sheet
              </button>
            </div>
          </div>
        </div>

        {/* ── HUD Elements Overlay ── */}
        <div className="absolute top-24 right-8 z-20 flex flex-col gap-2 text-right pointer-events-none hidden md:flex">
          <div className="font-label text-xs text-secondary-fixed-dim uppercase tracking-[0.1em] drop-shadow-md">
            L2 ORBIT STATUS
          </div>
          <div className="font-headline text-sm text-primary drop-shadow-md">
            STABLE / NOMINAL
          </div>
        </div>
        <div className="absolute bottom-8 right-8 z-20 flex flex-col gap-2 text-right pointer-events-none hidden md:flex">
          <div className="font-label text-xs text-secondary-fixed-dim uppercase tracking-[0.1em] drop-shadow-md">
            MIRROR TEMP
          </div>
          <div className="font-headline text-sm text-primary drop-shadow-md">
            40.2 K
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SYSTEM TELEMETRY & MISSION STATS
      ══════════════════════════════════════════ */}
      <SystemTelemetry />

      {/* ══════════════════════════════════════════
          THE SINGULARITY (3D SCENE)
      ══════════════════════════════════════════ */}
      <section
        id="singularity"
        className="relative w-full h-screen overflow-hidden flex items-center p-4 md:p-8"
      >
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <SplineScene scene="https://prod.spline.design/qn1N104nhlHyEGxv/scene.splinecode" />
        </div>

        {/* Gradients for smooth fading */}
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-surface to-transparent z-10 pointer-events-none" />

        {/* Black Hole Content (anchored left) */}
        <div className="relative z-20 w-full max-w-[1600px] mx-auto flex justify-start items-center h-full">
          <div className="max-w-xl flex flex-col justify-center h-full mt-16 pointer-events-none">
            <div className="font-label text-xs text-primary mb-2 uppercase tracking-[0.1em] drop-shadow-md">
              TARGET ACQUIRED
            </div>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-[-0.02em] mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              THE SINGULARITY
            </h2>
            <div className="flex flex-wrap gap-4 bg-surface-variant/40 backdrop-blur-md p-4 rounded-sm border border-outline-variant/20 w-fit drop-shadow-md">
              <div>
                <div className="font-label text-[10px] text-secondary-fixed-dim uppercase tracking-[0.1em] mb-1">
                  MASS
                </div>
                <div className="font-headline text-sm text-on-surface">
                  4.1M SUNS
                </div>
              </div>
              <div className="w-px bg-outline-variant/30 hidden md:block" />
              <div>
                <div className="font-label text-[10px] text-secondary-fixed-dim uppercase tracking-[0.1em] mb-1">
                  DISTANCE
                </div>
                <div className="font-headline text-sm text-on-surface">
                  26,000 LY
                </div>
              </div>
              <div className="w-px bg-outline-variant/30 hidden md:block" />
              <div>
                <div className="font-label text-[10px] text-secondary-fixed-dim uppercase tracking-[0.1em] mb-1">
                  TARGET
                </div>
                <div className="font-headline text-sm text-primary">
                  SAGITTARIUS A*
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <main className="relative z-30 -mt-32 md:-mt-64 pt-8 pb-24 px-4 md:px-8 max-w-[1600px] mx-auto flex flex-col gap-16">
        {/* ══════════════════════════════════════════
            CAPABILITIES GRID
        ══════════════════════════════════════════ */}
        <section id="capabilities" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Capability 1 — Infrared */}
          <div className="bg-surface-container-lowest border border-outline-variant/15 rounded-lg p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <Eye className="w-16 h-16 text-primary" />
            </div>
            <div className="font-label text-xs text-secondary-fixed-dim uppercase tracking-[0.1em] mb-2 flex justify-between items-center">
              <span>INFRARED SENSOR</span>
              <span className="text-primary opacity-50">NIRCam</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-2">
              PIERCE THE DUST
            </h3>
            <p className="font-body text-sm text-on-surface-variant">
              NIRCam sees what the human eye cannot, revealing hidden stars in
              stellar nurseries.
            </p>
          </div>

          {/* Capability 2 — Thermal */}
          <div className="bg-surface-container-lowest border border-outline-variant/15 rounded-lg p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <Snowflake className="w-16 h-16 text-tertiary" />
            </div>
            <div className="font-label text-xs text-secondary-fixed-dim uppercase tracking-[0.1em] mb-2 flex justify-between items-center">
              <span>THERMAL STATE</span>
              <span className="text-tertiary opacity-50">MIRI</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-2">
              THE COLDEST EYE
            </h3>
            <p className="font-body text-sm text-on-surface-variant">
              Operating at 40 Kelvin, observing the coldest and most distant
              objects.
            </p>
          </div>

          {/* Capability 3 — Positioning */}
          <div className="bg-surface-container-lowest border border-outline-variant/15 rounded-lg p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <Compass className="w-16 h-16 text-secondary" />
            </div>
            <div className="font-label text-xs text-secondary-fixed-dim uppercase tracking-[0.1em] mb-2 flex justify-between items-center">
              <span>POSITIONING</span>
              <span className="text-secondary opacity-50">L2</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-2">
              L2 ORBIT
            </h3>
            <p className="font-body text-sm text-on-surface-variant">
              Stationed 1.5 million km from Earth, keeping the sunshield
              aligned.
            </p>
          </div>
        </section>

      </main>

      {/* ══════════════════════════════════════════
          COSMIC LANDMARKS GALLERY
      ══════════════════════════════════════════ */}
      <CosmicLandmarks />

      {/* ── Footer ── */}
      <footer
        id="footer"
        className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-surface-container-lowest border-t border-surface-variant/20 font-label text-[10px] tracking-[0.1em] uppercase text-primary-container"
      >
        <div className="flex flex-col gap-2">
          <div className="text-lg font-bold text-primary-container">
            JWST OBSERVER
          </div>
          <div className="text-outline/60">
            © 2024 NASA/ESA/CSA ENGINEER&apos;S LOG — SYSTEM STATUS: NOMINAL
          </div>
        </div>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-outline/60 hover:text-primary-container transition-colors opacity-80 hover:opacity-100"
          >
            TELEMETRY
          </a>
          <a
            href="#"
            className="text-outline/60 hover:text-primary-container transition-colors opacity-80 hover:opacity-100"
          >
            SPECTROSCOPY
          </a>
          <a
            href="#"
            className="text-outline/60 hover:text-primary-container transition-colors opacity-80 hover:opacity-100"
          >
            L2 COORDINATES
          </a>
          <a
            href="#"
            className="text-outline/60 hover:text-primary-container transition-colors opacity-80 hover:opacity-100"
          >
            LEGAL
          </a>
        </div>
      </footer>
    </>
  );
}
