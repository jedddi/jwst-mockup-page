'use client';
import React from 'react';
import Lenis from '@studio-freight/lenis';
import { ZoomParallax } from "@/components/ui/zoom-parallax";

export function CosmicLandmarks() {

	React.useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])

	const images = [
		{
			src: '/cosmiclandmark/carina-nebula.jpg',
			alt: 'Carina Nebula',
		},
		{
			src: '/cosmiclandmark/phantom_galaxy.jpg',
			alt: 'Phantom Galaxy',
		},
		{
			src: '/cosmiclandmark/pillars-of-creation.jpg',
			alt: 'Pillars of Creation',
		},
		{
			src: '/cosmiclandmark/southern_ring_nebula.png',
			alt: 'Southern Ring Nebula',
		},
		{
			src: '/cosmiclandmark/stephans-quintet.jpg',
			alt: 'Stephans Quintet',
		},
		{
			src: '/cosmiclandmark/tarantula_nebula.png',
			alt: 'Tarantula Nebula',
		},
		{
			src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1280&h=720&fit=crop&q=80',
			alt: 'Milky Way Galaxy',
		},
	];

	return (
		<section id="gallery" className="mt-8 relative w-full">
			<div className="relative flex h-[50vh] items-center justify-center">
				{/* Radial spotlight */}
				<div
					aria-hidden="true"
					className="pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(227,176,75,0.05),transparent_50%)] blur-[30px]"
				/>
				<h2 className="font-headline text-5xl font-bold tracking-[-0.02em] text-center drop-shadow-md">
					COSMIC LANDMARKS
				</h2>
			</div>
			<div className="w-full relative">
				<ZoomParallax images={images} />
			</div>
			<div className="h-[20vh]"/>
		</section>
	);
}
