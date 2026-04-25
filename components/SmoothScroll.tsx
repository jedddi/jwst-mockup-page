'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

/**
 * One Lenis instance for the whole app (smooth wheel scrolling).
 * CosmicLandmarks previously created its own Lenis with no destroy — that leaked RAF
 * loops and fought framer's scroll tracking.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1,
    });

    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
