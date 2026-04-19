import { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export function SplineScene({ scene, className }: { scene: string; className?: string }) {
  return (
    <Suspense
      fallback={
        <div className={`flex items-center justify-center bg-surface/50 w-full h-full ${className || ''}`}>
          <div className="w-4 h-4 rounded-full bg-primary animate-pulse-glow opacity-80" />
        </div>
      }
    >
      <div className={`w-full h-full ${className || ''}`}>
        <Spline scene={scene} />
      </div>
    </Suspense>
  );
}
