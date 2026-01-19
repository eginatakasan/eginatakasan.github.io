'use client';

import { useEffect, useState, useRef } from 'react';
import tailwindConfig from '../../../tailwind.config';
import clsx from 'clsx';

interface Circle {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
}

const themeColors = tailwindConfig.theme?.extend?.colors as any;
const colors = Object.freeze([
    themeColors?.accent?.light + '30',
    themeColors?.accent?.DEFAULT + '30',
    themeColors?.secondary?.light + '30',
    themeColors?.secondary?.DEFAULT + '30',
    themeColors?.accent?.light + '30',
    themeColors?.accent?.DEFAULT + '30',
]);

const LavaLamp = () => {
    const [circles, setCircles] = useState<Circle[]>([]);
    const animationFrameRef = useRef<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Initialize circles
    useEffect(() => {


        console.log(themeColors)

        const initialCircles: Circle[] = Array.from({ length: 6 }, (_, i) => {
            const width = typeof window !== 'undefined' ? window.innerWidth : 1000;
            const height = typeof window !== 'undefined' ? window.innerHeight : 1000;

            // Create a 3x2 grid distribution
            const cols = 3;
            const rows = 2;
            const col = i % cols;
            const row = Math.floor(i / cols);

            // Calculate the center of each grid cell
            const cellWidth = width / cols;
            const cellHeight = height / rows;

            // Add randomness within each cell (±40% of cell size)
            const randomOffsetX = (Math.random() - 0.5) * cellWidth * 0.8;
            const randomOffsetY = (Math.random() - 0.5) * cellHeight * 0.8;

            return {
                id: i,
                x: col * cellWidth + cellWidth / 2 + randomOffsetX,
                y: row * cellHeight + cellHeight / 2 + randomOffsetY,
                vx: (Math.random() - 0.5) * 0.5, // Slow horizontal velocity
                vy: (Math.random() - 0.5), // Slow vertical velocity
                size: 300 + Math.random() * 600, // Random size between 300-900px
                color: colors[i],
            };
        });

        setCircles(initialCircles);
    }, []);

    // Animation loop
    useEffect(() => {
        if (circles.length === 0) return;

        const animate = () => {
            setCircles((prevCircles) =>
                prevCircles.map((circle) => {
                    let { x, y, vx, vy } = circle;

                    const width = containerRef.current?.clientWidth || window.innerWidth;
                    const height = containerRef.current?.clientHeight || window.innerHeight;

                    // Add slight random acceleration for organic movement
                    vx += (Math.random() - 0.5) * 0.02;
                    vy += (Math.random() - 0.5) * 0.02;

                    const maxSpeed = 0.5;
                    const speed = Math.sqrt(vx * vx + vy * vy);
                    if (speed > maxSpeed) {
                        vx = (vx / speed) * maxSpeed;
                        vy = (vy / speed) * maxSpeed;
                    }
                    x += vx;
                    y += vy;
                    const margin = circle.size / 2;
                    if (x < margin || x > width - margin) {
                        vx = -vx * 0.8;
                        x = Math.max(margin, Math.min(width - margin, x));
                    }
                    if (y < margin || y > height - margin) {
                        vy = -vy * 0.8;
                        y = Math.max(margin, Math.min(height - margin, y));
                    }

                    return { ...circle, x, y, vx, vy };
                })
            );

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [circles.length]);

    return (
        <div
            ref={containerRef}
            className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none"
            style={{ zIndex: 0 }}
        >
            {circles.map((circle) => (
                <div
                    key={circle.id}
                    className={clsx(`absolute rounded-full transition-all duration-100 ease-linear`)}
                    style={{
                        left: `${circle.x}px`,
                        top: `${circle.y}px`,
                        width: `${circle.size}px`,
                        height: `${circle.size}px`,
                        backgroundColor: circle.color,
                        transform: 'translate(-50%, -50%)',
                        willChange: 'transform',
                        background: `radial-gradient(circle at center, ${circle.color} 0%, transparent 80%)`
                    }}
                />
            ))}
        </div>
    );
};

export default LavaLamp;