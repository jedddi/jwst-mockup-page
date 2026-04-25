'use client';
import React from 'react';
import Image from 'next/image';
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { motion } from 'framer-motion';

export function CosmicLandmarks() {

	const images = [
		{
			src: '/cosmiclandmark/tarantula_nebula.png',
			alt: 'Tarantula Nebula',
		},
		{
			src: '/cosmiclandmark/phantom_galaxy.jpg',
			alt: 'Phantom Galaxy',
		},
		{
			src: '/cosmiclandmark/pillars-of-creation.png',
			alt: 'Pillars of Creation',
		},
		{
			src: '/cosmiclandmark/southern_ring_nebula.png',
			alt: 'Southern Ring Nebula',
		},
		{
			src: '/cosmiclandmark/stephans-quintet-2.jpg',
			alt: 'Stephans Quintet',
		},
		{
			src: '/cosmiclandmark/carina-nebula-jets.jpg',
			alt: 'Carina Nebula',
		},
		{
			src: '/cosmiclandmark/ngc602.jpg',
			alt: 'Star Cluster NGC 602',
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

			{/* Post-Zoom Normal Flow Layout (Option C) */}
			<div className="max-w-[1600px] mx-auto px-4 md:px-8 py-32 flex flex-col gap-24 md:gap-48 overflow-hidden z-20 relative [content-visibility:auto]">
				<div className="text-center font-headline text-2xl tracking-[0.1em] uppercase text-outline-variant/60">
					MISSION LOG VISUALS
				</div>
				{images.slice(1).map((img, i) => (
					<motion.div
						key={`fade-${i}`}
						initial={{ opacity: 0, y: 100, scale: 0.95 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true, margin: "-100px" }}
						className="relative w-full h-[60vh] md:h-[80vh] rounded-2xl overflow-hidden border border-outline-variant/10 shadow-2xl"
					>
						<Image
							src={img.src}
							alt={img.alt}
							fill
							sizes="(max-width: 768px) 100vw, min(1600px, 100vw)"
							className="object-cover"
							loading="lazy"
							decoding="async"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-90" />
						<div className="absolute bottom-8 left-8 flex flex-col gap-1">
							<div className="font-label text-xs tracking-[0.1em] text-primary uppercase drop-shadow-md">
								OBSERVATION LOG 0{i + 2}
							</div>
							<div className="font-headline text-3xl md:text-5xl font-bold text-on-surface drop-shadow-md">
								{img.alt}
							</div>
						</div>
					</motion.div>
				))}
			</div>
			<div className="h-[20vh]" />
		</section>
	);
}
