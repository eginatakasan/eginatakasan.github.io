'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '../../../src/components/atoms';
import {
  ChevronDoubleRightIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/solid';
import url from '../../../src/constants/url.constant';
import Github from '../../../src/components/atoms/Icon/Github.icon';
import TinyContacts from '../../../src/components/organisms/TinyContacts';
import Link from 'next/link';

const theme_island = {
  island: '#ebb98d',
  mountain: '#524128',
  island_highlight: '#fce7d4',
  sea: '#83a3d6',
  forest: '#92b86e',
  deep_forest: '#6a8c32',
  deep_sea: '#23457d',
  path: '#000000',
  boat_path: '#eb5b34',
};
const theme = theme_island;
const MIN_STEP = 1;
const MAX_STEP = 10;
const MIN_SCALE = 0.001;
const MAX_SCALE = 0.01;
const DEFAULT_ZOOM = 50;

const zoomToScale = (zoom: number) => {
  return ((100 - zoom) / 100) * (MAX_SCALE - MIN_SCALE) + MIN_SCALE;
};

const RandomIslandsGenerator = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<any>(null);
  const [isStatic, setIsStatic] = useState(true);
  const [p5Loaded, setP5Loaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const islandCoordsRef = useRef<{ [key: string]: boolean }>({});

  // Slider state variables
  const [squareSize, setSquareSize] = useState(10);
  const [step, setStep] = useState(2);
  const [zoomLevel, setZoomLevel] = useState(DEFAULT_ZOOM);
  const [scale, setScale] = useState(zoomToScale(DEFAULT_ZOOM));

  // Menu collapse state
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  // Function to manually regenerate the island
  const handleGenerate = useCallback(() => {
    if (p5InstanceRef.current) {
      setIsLoading(true);
      // Clear the island coordinates
      islandCoordsRef.current = {};
      // Trigger regeneration by calling the p5 instance's regenerateIsland method
      if (p5InstanceRef.current.regenerateIsland) {
        p5InstanceRef.current.regenerateIsland();
      }
    }
  }, [p5InstanceRef]);

  // Function to save the canvas as an image
  const handleSaveImage = useCallback(() => {
    if (p5InstanceRef.current) {
      // Generate a filename with timestamp
      const timestamp = new Date()
        .toISOString()
        .replace(/[:.]/g, '-')
        .slice(0, -5);
      const filename = `random-island-map-${timestamp}.png`;

      // Save the canvas as PNG
      p5InstanceRef.current.saveCanvas(filename, 'png');
    }
  }, [p5InstanceRef]);

  useEffect(() => {
    setIsStatic(false);
  }, []);

  useEffect(() => {
    if (isStatic) return;

    // Load p5 from CDN
    const script = document.createElement('script');
    script.src =
      process.env.NEXT_PUBLIC_P5JS_CDN ||
      'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/p5.min.js';
    script.onload = () => {
      setP5Loaded(true);
    };
    script.onerror = () => {
      console.error('Failed to load p5.js from CDN');
    };
    document.head.appendChild(script);

    return () => {
      // Clean up script tag
      const existingScript = document.querySelector('script[src*="p5.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [isStatic]);

  useEffect(() => {
    if (!canvasRef.current || !p5Loaded) return;

    const P5 = (window as any).p5;

    const sketch = (p: any) => {
      const generateIsland = () => {
        for (let i = 0; i < window.innerWidth; i += step) {
          for (let j = 0; j < window.innerHeight; j += step) {
            const n = p.noise(i * scale, j * scale, 0);
            let color = theme.sea;

            if (n < 0.5) {
              color = theme.deep_sea;
            } else if (n >= 0.5 && n < 0.6) {
              color = theme.sea;
            } else {
              islandCoordsRef.current[`${i},${j}`] = true;
              if (n >= 0.6 && n < 0.65) color = theme.island;
              else if (n < 0.75) color = theme.forest;
              else if (n < 0.8) color = theme.deep_forest;
              else color = theme.mountain;
            }

            p.fill(color);
            p.rect(i, j, squareSize, squareSize);
          }
        }
        setIsLoading(false);
      };

      p.setup = () => {
        const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
        canvas.parent(canvasRef.current!);
        p.background(theme.sea);
        p.noStroke();
        generateIsland();
      };

      p.regenerateIsland = () => {
        p.background(theme.sea);
        islandCoordsRef.current = {};
        p.noiseSeed(Math.random() * 10000);
        generateIsland();
      };
    };

    p5InstanceRef.current = new P5(sketch, canvasRef.current!);

    // Add window resize listener
    const handleWindowResize = () => {
      if (p5InstanceRef.current && p5InstanceRef.current.handleResize) {
        setIsLoading(true);
        p5InstanceRef.current.handleResize();
      }
    };

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      p5InstanceRef.current?.remove();
      p5InstanceRef.current = null;
    };
  }, [p5Loaded, squareSize, step, scale]);

  const handleSliderChange = (
    setter: (value: number) => void,
    value: number,
  ) => {
    setIsLoading(true);
    setter(value);
  };

  return (
    <main
      className="flex flex-col-reverse lg:flex-col font-raleway w-full relative"
      style={{ backgroundColor: theme.sea }}
      role="main"
      aria-label="Random Islands Generator Application"
    >
      <section
        ref={canvasRef}
        className="flex w-full h-screen inset-0 lg:right-[400px] relative"
        aria-label="Interactive Island Canvas"
        role="application"
      >
        {isLoading && (
          <div
            className="absolute lg:inset-0 lg:right-[400px] bg-black/50 z-10 items-center justify-center flex"
            role="status"
            aria-live="polite"
          >
            <div className="text-white text-xl">Loading Islands...</div>
          </div>
        )}
      </section>
      <aside
        className="w-full min-h-screen lg:absolute lg:bottom-0 lg:inset-x-0 lg:max-w-[400px] lg:right-0 lg:inset-y-0 lg:left-auto flex-col rounded-lt-xl rounded-bl-xl bg-white bg-opacity-95 z-20 transition-all duration-300 ease-in-out"
        style={{ width: isMenuCollapsed ? '0px' : '100%' }}
        role="complementary"
        aria-label="Island Generator Controls"
      >
        {/* Chevron toggle button */}
        <button
          onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
          className="hidden lg:block absolute left-0 top-1/2 p-5 transform -translate-y-1/2 -translate-x-full bg-white bg-opacity-100 text-accent hover:text-accent-light rounded-full shadow-lg transition-all duration-300 ease-in-out z-30"
          style={{
            transform: `translate(${
              isMenuCollapsed ? '-100%' : '-50%'
            }, -50%) rotate(${isMenuCollapsed ? '180deg' : '0deg'})`,
            opacity: isMenuCollapsed ? 0.6 : 1,
          }}
          aria-label={
            isMenuCollapsed
              ? 'Expand controls panel'
              : 'Collapse controls panel'
          }
          aria-expanded={!isMenuCollapsed}
        >
          <ChevronDoubleRightIcon
            strokeWidth={2}
            className="w-8 h-8 text-current"
          />
        </button>

        <div className="w-full h-full flex flex-col p-5 pl-10">
          <div className="flex flex-col items-end mb-10">
            <p className="text-sm text-gray-500">Author: Eginata Kasan</p>
            <Link
              href="/projects"
              className="text-sm text-accent-dark hover:underline mt-2"
            >
              See My Other Projects
            </Link>
          </div>
          <div
            className="w-full space-y-4"
            style={{
              opacity: isMenuCollapsed ? 0 : 1,
              transition: 'opacity 0.3s ease-in-out',
            }}
          >
            <h1 className="text-2xl font-bold mb-4" id="main-title">
              Random Islands Generator
            </h1>
            <p className="font-raleway text-base text-gray-500 mb-10">
              This generator uses 2-dimensional Perlin noise function to create
              randomness that appears "natural". Perlin noise function is
              invented by Ken Perlin in 1983 with applications like terrain or
              texture generation. The rendering of the map uses{' '}
              <a className="underline text-accent-dark" href={url.p5js}>
                Processing (p5.js){' '}
              </a>
              library.
              <br /> <br />
              Check out the{' '}
              <a
                href={url.randomIslandsGeneratorRepo}
                className="text-accent-dark inline-flex items-center gap-1 hover:underline"
              >
                code <Github width={20} height={20} />
              </a>
            </p>

            <div className="w-full space-y-4">
              <div>
                <div className="space-y-2 mb-2">
                  <label
                    htmlFor="pixel-size-slider"
                    className="text-base font-normal text-gray-700"
                  >
                    Pixel Size:{' '}
                    <span className="font-bold text-accent-dark">{step}</span>
                  </label>
                  <input
                    id="pixel-size-slider"
                    type="range"
                    min={MIN_STEP}
                    max={MAX_STEP}
                    value={step}
                    onChange={e => {
                      handleSliderChange(setStep, parseInt(e.target.value));
                      handleSliderChange(
                        setSquareSize,
                        parseInt(e.target.value) * 10,
                      );
                    }}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    aria-describedby="pixel-size-description"
                  />
                  <div id="pixel-size-description" className="sr-only">
                    Adjust the pixel size from {MIN_STEP} to {MAX_STEP} pixels.
                    Larger values create bigger pixels and faster rendering.
                  </div>
                </div>

                <div className="mb-10">
                  <label
                    htmlFor="zoom-level-slider"
                    className="text-base font-normal text-gray-700"
                  >
                    Zoom Level:{' '}
                    <span className="font-bold text-accent-dark">
                      {zoomLevel}%
                    </span>
                  </label>
                  <input
                    id="zoom-level-slider"
                    type="range"
                    min={0}
                    max={100}
                    step="5"
                    value={zoomLevel}
                    onChange={e => {
                      const zoom = parseInt(e.target.value);
                      const newScale =
                        ((100 - zoom) / 100) * (MAX_SCALE - MIN_SCALE) +
                        MIN_SCALE;
                      setScale(newScale);

                      handleSliderChange(
                        setZoomLevel,
                        parseInt(e.target.value),
                      );
                    }}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    aria-describedby="zoom-level-description"
                  />
                  <div id="zoom-level-description" className="sr-only">
                    Adjust the zoom level from 0% to 100%. Higher zoom levels
                    show more detail but may render slower.
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <Button onClick={handleSaveImage}>
                    <ArrowDownTrayIcon className="w-5 h-5" />
                    Save Image
                  </Button>
                  <Button
                    disabled={isLoading}
                    variant="outlined"
                    onClick={handleGenerate}
                  >
                    Generate New Map
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 min-h-10"></div>
          <div className="flex flex-row justify-end">
            <TinyContacts />
          </div>
        </div>
      </aside>
    </main>
  );
};

export default RandomIslandsGenerator;
