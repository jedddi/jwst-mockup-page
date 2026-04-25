'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SplineScene } from '@/components/SplineScene';

/**
 * Spline WebGL runs continuously and competes with the parallax gallery for GPU.
 * Unmount the canvas when this section is off-screen so scrolling the gallery is lighter.
 */
export function SingularitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.12, once: false });

  return (
    <section
      ref={sectionRef}
      id="singularity"
      className="relative w-full h-screen overflow-hidden flex items-center p-4 md:p-8"
    >
      <div className="absolute inset-0 z-0">
        {inView ? (
          <SplineScene scene="https://prod.spline.design/qn1N104nhlHyEGxv/scene.splinecode" />
        ) : (
          <div
            className="absolute inset-0 bg-surface"
            aria-hidden
          />
        )}
      </div>

      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-surface to-transparent z-10 pointer-events-none" />

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
  );
}
