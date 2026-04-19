import Image from "next/image";
import { Thermometer, CheckCircle2, Hexagon, History } from "lucide-react";

export function SystemTelemetry() {
  return (
    <section
      id="telemetry"
      className="relative min-h-screen pt-32 pb-24 grid-bg"
    >
      {/* Top Fade */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-surface to-transparent z-10 pointer-events-none" />
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-surface to-transparent z-10 pointer-events-none" />

      <div className="relative z-20">
        {/* ── Header Section ── */}
        <header className="max-w-7xl mx-auto px-8 mb-16 relative">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(227,176,75,0.8)] animate-pulse-glow" />
            <span className="font-headline text-[10px] tracking-[0.2em] uppercase text-secondary-fixed-dim">
              Real-Time Data Feed
            </span>
          </div>
          <h2 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-on-surface mb-4">
            SYSTEM
            <br />
            <span className="text-primary-container">TELEMETRY</span>
          </h2>
          <p className="max-w-xl text-on-surface-variant text-lg leading-relaxed font-body">
            Deep space diagnostic array monitoring the James Webb Space
            Telescope&apos;s current mechanical and thermal equilibrium across L2
            orbit.
          </p>
        </header>

        {/* ── Bento Grid Layout ── */}
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* ▸ Operating Temperature (Large Card) */}
          <div className="md:col-span-8 md:row-span-2 glass-panel p-8 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 p-8">
              <Thermometer className="text-primary-container/20 w-24 h-24 transform group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div>
              <span className="font-headline text-[10px] tracking-[0.2em] uppercase text-primary mb-2 block">
                Thermal Management
              </span>
              <h3 className="font-headline text-3xl font-bold text-on-surface mb-8">
                OPERATING TEMPERATURE
              </h3>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="font-headline text-8xl md:text-9xl font-bold tracking-tighter text-primary-container">
                -233
              </span>
              <span className="font-headline text-4xl text-on-surface-variant">
                °C
              </span>
            </div>
            <div className="mt-8 border-t border-outline-variant/20 pt-6 flex justify-between items-center">
              <p className="text-sm font-body text-on-surface-variant max-w-xs">
                Essential for Mid-Infrared Instrument (MIRI) sensitivity.
                Maintaining 40K baseline.
              </p>
              <div className="flex items-center gap-2 px-3 py-1 bg-primary-container/10 border border-primary-container/30 rounded-full">
                <CheckCircle2 className="text-primary-container w-3 h-3" />
                <span className="font-headline text-[10px] uppercase font-bold text-primary-container">
                  Optimal
                </span>
              </div>
            </div>
          </div>

          {/* ▸ Exoplanets Profiled */}
          <div className="md:col-span-4 glass-panel p-6 flex flex-col justify-between border-l-4 border-l-primary-container">
            <span className="font-headline text-[10px] tracking-[0.2em] uppercase text-secondary-fixed-dim mb-4 block">
              Planetary Catalog
            </span>
            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-headline text-5xl font-bold text-on-surface">
                  150+
                </span>
              </div>
              <p className="font-headline text-sm uppercase tracking-wider text-primary-container">
                Exoplanets Profiled
              </p>
            </div>
            <div className="mt-6">
              <Image
                src="/images/exoplanet.jpg"
                alt="Stylized glowing exoplanet with faint atmospheric rings against a deep black void and distant stars"
                width={400}
                height={96}
                className="w-full h-24 object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded opacity-50 hover:opacity-100"
              />
            </div>
          </div>

          {/* ▸ Sunshield Efficiency */}
          <div className="md:col-span-4 glass-panel p-6">
            <span className="font-headline text-[10px] tracking-[0.2em] uppercase text-secondary-fixed-dim mb-6 block">
              Sunshield Efficiency
            </span>
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-headline text-on-surface-variant">
                    Hot Side
                  </span>
                  <p className="text-2xl font-headline font-bold text-on-surface">
                    85°C
                  </p>
                </div>
                <div className="w-1/2 h-1 bg-surface-container-high relative">
                  <div className="absolute left-0 top-0 h-full bg-error w-[85%]" />
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-headline text-on-surface-variant">
                    Cold Side
                  </span>
                  <p className="text-2xl font-headline font-bold text-primary-container">
                    -233°C
                  </p>
                </div>
                <div className="w-1/2 h-1 bg-surface-container-high relative">
                  <div className="absolute left-0 top-0 h-full bg-primary-container w-[15%]" />
                </div>
              </div>
            </div>
            <p className="mt-6 text-[11px] text-on-surface-variant leading-tight">
              Five-layer Kapton membrane maintaining a ~300°C thermal gradient.
            </p>
          </div>

          {/* ▸ Mirror Alignment */}
          <div className="md:col-span-6 glass-panel p-8 flex items-center justify-between group overflow-hidden">
            <div className="relative z-10">
              <span className="font-headline text-[10px] tracking-[0.2em] uppercase text-secondary-fixed-dim mb-2 block">
                Optics Integrity
              </span>
              <h4 className="font-headline text-3xl font-bold text-on-surface mb-2">
                MIRROR ALIGNMENT
              </h4>
              <div className="inline-flex items-center gap-2 bg-on-tertiary-container/20 text-tertiary-container px-3 py-1 rounded-sm border border-tertiary-container/30">
                <span className="font-headline text-xs font-bold tracking-widest uppercase">
                  State: NOMINAL
                </span>
              </div>
            </div>
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-primary-container/20 rounded-full animate-spin [animation-duration:10s]" />
              <div className="absolute inset-2 border border-primary-container/40 rounded-full animate-spin [animation-duration:15s] [animation-direction:reverse]" />
              <Hexagon className="text-primary-container w-10 h-10 fill-current" />
            </div>
          </div>

          {/* ▸ Temporal Depth */}
          <div className="md:col-span-3 glass-panel p-6 flex flex-col justify-between">
            <div>
              <span className="font-headline text-[10px] tracking-[0.2em] uppercase text-secondary-fixed-dim mb-4 block">
                Temporal Depth
              </span>
              <p className="text-4xl font-headline font-bold text-on-surface">
                13.5B
              </p>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                Light Years Back
              </p>
            </div>
            <History className="text-primary-container/40 w-10 h-10 mt-4" />
          </div>

          {/* ▸ Uptime Log */}
          <div className="md:col-span-3 glass-panel p-6 flex flex-col justify-between bg-gradient-to-br from-surface-variant/40 to-surface-container-lowest/40">
            <div>
              <span className="font-headline text-[10px] tracking-[0.2em] uppercase text-secondary-fixed-dim mb-4 block">
                Uptime Log
              </span>
              <p className="text-4xl font-headline font-bold text-primary-container">
                4,300+
              </p>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                Active Hours
              </p>
            </div>
            <div className="flex -space-x-2 mt-4 overflow-hidden">
              <div className="w-8 h-8 rounded-full border border-surface bg-surface-container-high flex items-center justify-center text-[10px] text-primary">
                SC
              </div>
              <div className="w-8 h-8 rounded-full border border-surface bg-surface-container-high flex items-center justify-center text-[10px] text-primary">
                NA
              </div>
              <div className="w-8 h-8 rounded-full border border-surface bg-surface-container-high flex items-center justify-center text-[10px] text-primary">
                EU
              </div>
            </div>
          </div>
        </div>

        {/* ── HUD Decorative Element ── */}
        <div className="max-w-7xl mx-auto px-8 mt-12 hidden md:block">
          <div className="flex justify-between items-center opacity-20">
            <div className="h-px bg-outline w-full mr-4" />
            <div className="font-headline text-[8px] uppercase tracking-[0.5em] whitespace-nowrap text-on-surface-variant">
              END OF TELEMETRY FEED // LATENCY: 24MS
            </div>
            <div className="h-px bg-outline w-full ml-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
