'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const PaintOnline = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<any>(null);
  const [isStatic, setIsStatic] = useState(true);
  const [p5Loaded, setP5Loaded] = useState(false);
  const [toolMode, setToolMode] = useState<'brush' | 'fill'>('brush');
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState('#000000');
  const toolModeRef = useRef<'brush' | 'fill'>('brush');
  const brushSizeRef = useRef(5);
  const brushColorRef = useRef('#000000');
  const isDrawingRef = useRef(false);
  const previousMouseRef = useRef<{ x: number; y: number } | null>(null);
  const historyRef = useRef<Array<string>>([]); // Store canvas states as base64 images
  const historyIndexRef = useRef(-1);
  const maxHistorySize = 50;
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const undoFunctionRef = useRef<(() => void) | null>(null);
  const redoFunctionRef = useRef<(() => void) | null>(null);

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
      // Flood fill function
      const floodFill = (startX: number, startY: number, fillColor: any) => {
        p.loadPixels();
        const width = p.width;
        const height = p.height;
        const pixels = p.pixels;

        // Get the color at the starting point
        const startIdx = (Math.floor(startY) * width + Math.floor(startX)) * 4;
        const targetR = pixels[startIdx];
        const targetG = pixels[startIdx + 1];
        const targetB = pixels[startIdx + 2];
        const targetA = pixels[startIdx + 3];

        // Convert fill color to RGB
        const fillR = p.red(fillColor);
        const fillG = p.green(fillColor);
        const fillB = p.blue(fillColor);

        // If the target color matches the fill color, do nothing
        if (
          targetR === fillR &&
          targetG === fillG &&
          targetB === fillB &&
          Math.abs(targetA - 255) < 1
        ) {
          return;
        }

        // Queue-based flood fill
        const queue: Array<[number, number]> = [
          [Math.floor(startX), Math.floor(startY)],
        ];
        const visited = new Set<string>();

        while (queue.length > 0) {
          const [x, y] = queue.shift()!;
          const key = `${x},${y}`;

          if (visited.has(key)) continue;
          if (x < 0 || x >= width || y < 0 || y >= height) continue;

          const idx = (y * width + x) * 4;
          const r = pixels[idx];
          const g = pixels[idx + 1];
          const b = pixels[idx + 2];
          const a = pixels[idx + 3];

          // Check if pixel matches target color (with tolerance for anti-aliasing)
          const colorMatch =
            Math.abs(r - targetR) < 5 &&
            Math.abs(g - targetG) < 5 &&
            Math.abs(b - targetB) < 5 &&
            Math.abs(a - targetA) < 5;

          if (!colorMatch) continue;

          visited.add(key);

          // Fill the pixel
          pixels[idx] = fillR;
          pixels[idx + 1] = fillG;
          pixels[idx + 2] = fillB;
          pixels[idx + 3] = 255;

          // Add neighbors to queue
          queue.push([x + 1, y]);
          queue.push([x - 1, y]);
          queue.push([x, y + 1]);
          queue.push([x, y - 1]);
        }

        p.updatePixels();
      };

      // Function to save current canvas state to history
      const saveState = () => {
        const canvasImage = p.get();
        const imageData = canvasImage.canvas.toDataURL('image/png');

        // Remove any states after current index (when user draws after undo)
        if (historyIndexRef.current < historyRef.current.length - 1) {
          historyRef.current = historyRef.current.slice(
            0,
            historyIndexRef.current + 1,
          );
        }

        // Add new state
        historyRef.current.push(imageData);

        // Limit history size
        if (historyRef.current.length > maxHistorySize) {
          historyRef.current.shift();
          // Don't change historyIndexRef when we shift, as we're removing the oldest state
        }

        historyIndexRef.current = historyRef.current.length - 1;

        // Update button states
        setCanUndo(historyIndexRef.current > 0);
        setCanRedo(false);
      };

      // Function to restore canvas from history
      const restoreState = (index: number) => {
        if (index < 0 || index >= historyRef.current.length) return;

        const imageData = historyRef.current[index];
        const img = p.loadImage(imageData, () => {
          p.image(img, 0, 0);
        });

        historyIndexRef.current = index;
        setCanUndo(index > 0);
        setCanRedo(index < historyRef.current.length - 1);
      };

      // Expose functions to parent component
      p.saveState = saveState;
      p.restoreState = restoreState;

      const undoFn = () => {
        if (historyIndexRef.current > 0) {
          restoreState(historyIndexRef.current - 1);
        }
      };

      const redoFn = () => {
        if (historyIndexRef.current < historyRef.current.length - 1) {
          restoreState(historyIndexRef.current + 1);
        }
      };

      p.undo = undoFn;
      p.redo = redoFn;

      // Store functions in refs for direct access
      undoFunctionRef.current = undoFn;
      redoFunctionRef.current = redoFn;

      p.setup = () => {
        const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
        canvas.parent(canvasRef.current!);
        p.background(255);
        p.strokeCap(p.ROUND);
        p.strokeJoin(p.ROUND);

        // Save initial state
        setTimeout(() => {
          saveState();
        }, 100);
      };

      p.draw = () => {
        // Drawing is handled in mouseDragged
      };

      p.mousePressed = () => {
        if (toolModeRef.current === 'fill') {
          // Save state before fill
          saveState();
          // Use fill tool
          const fillColor = p.color(brushColorRef.current);
          floodFill(p.mouseX, p.mouseY, fillColor);
        } else {
          // Use brush tool
          isDrawingRef.current = true;
          previousMouseRef.current = { x: p.mouseX, y: p.mouseY };
          p.stroke(brushColorRef.current);
          p.strokeWeight(brushSizeRef.current);
          p.point(p.mouseX, p.mouseY);
        }
      };

      p.mouseDragged = () => {
        if (isDrawingRef.current) {
          p.stroke(brushColorRef.current);
          p.strokeWeight(brushSizeRef.current);

          if (previousMouseRef.current) {
            // Draw a line from previous position to current position
            p.line(
              previousMouseRef.current.x,
              previousMouseRef.current.y,
              p.mouseX,
              p.mouseY,
            );
          }

          previousMouseRef.current = { x: p.mouseX, y: p.mouseY };
        }
      };

      p.mouseReleased = () => {
        if (isDrawingRef.current) {
          // Save state after drawing is complete
          saveState();
        }
        isDrawingRef.current = false;
        previousMouseRef.current = null;
      };

      p.touchStarted = () => {
        if (toolModeRef.current === 'fill') {
          // Save state before fill
          saveState();
          // Use fill tool
          const fillColor = p.color(brushColorRef.current);
          floodFill(p.mouseX, p.mouseY, fillColor);
        } else {
          // Use brush tool
          isDrawingRef.current = true;
          previousMouseRef.current = { x: p.mouseX, y: p.mouseY };
          p.stroke(brushColorRef.current);
          p.strokeWeight(brushSizeRef.current);
          p.point(p.mouseX, p.mouseY);
        }
        return false; // Prevent default touch behavior
      };

      p.touchMoved = () => {
        if (isDrawingRef.current) {
          p.stroke(brushColorRef.current);
          p.strokeWeight(brushSizeRef.current);

          if (previousMouseRef.current) {
            p.line(
              previousMouseRef.current.x,
              previousMouseRef.current.y,
              p.mouseX,
              p.mouseY,
            );
          }

          previousMouseRef.current = { x: p.mouseX, y: p.mouseY };
        }
        return false; // Prevent scrolling
      };

      p.touchEnded = () => {
        if (isDrawingRef.current) {
          // Save state after drawing is complete
          saveState();
        }
        isDrawingRef.current = false;
        previousMouseRef.current = null;
        return false;
      };

      // Handle window resize
      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      };
    };

    p5InstanceRef.current = new P5(sketch, canvasRef.current!);

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
      // Clear function refs
      undoFunctionRef.current = null;
      redoFunctionRef.current = null;
    };
  }, [p5Loaded]);

  // Update refs when state changes
  useEffect(() => {
    toolModeRef.current = toolMode;
  }, [toolMode]);

  useEffect(() => {
    brushSizeRef.current = brushSize;
  }, [brushSize]);

  useEffect(() => {
    brushColorRef.current = brushColor;
  }, [brushColor]);

  const handleUndo = useCallback(() => {
    console.log('handleUndo');
    if (undoFunctionRef.current) {
      console.log('actual undo');
      undoFunctionRef.current();
    }
  }, []);

  const handleRedo = useCallback(() => {
    if (redoFunctionRef.current) {
      redoFunctionRef.current();
    }
  }, []);

  // Keyboard shortcuts for undo/redo
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        handleUndo();
      } else if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === 'y' || (e.key === 'z' && e.shiftKey))
      ) {
        e.preventDefault();
        handleRedo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleUndo, handleRedo]);

  const handleClear = useCallback(() => {
    if (p5InstanceRef.current) {
      // Save state before clearing
      if (p5InstanceRef.current.saveState) {
        p5InstanceRef.current.saveState();
      }
      p5InstanceRef.current.background(255);
      // Save cleared state
      setTimeout(() => {
        if (p5InstanceRef.current && p5InstanceRef.current.saveState) {
          p5InstanceRef.current.saveState();
        }
      }, 10);
    }
  }, []);

  const handleSave = useCallback(() => {
    if (p5InstanceRef.current) {
      const timestamp = new Date()
        .toISOString()
        .replace(/[:.]/g, '-')
        .slice(0, -5);
      const filename = `paint-online-${timestamp}.png`;
      p5InstanceRef.current.saveCanvas(filename, 'png');
    }
  }, []);

  return (
    <div className="w-full h-screen relative bg-white">
      <div
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ cursor: toolMode === 'fill' ? 'crosshair' : 'crosshair' }}
      />

      {/* Controls overlay */}
      <div className="fixed top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 flex flex-col gap-4 min-w-[200px] z-20">
        {/* Tool Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tool
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => setToolMode('brush')}
              className={`flex-1 px-4 py-2 rounded text-sm font-medium transition-colors ${
                toolMode === 'brush'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              Brush
            </button>
            <button
              onClick={() => setToolMode('fill')}
              className={`flex-1 px-4 py-2 rounded text-sm font-medium transition-colors ${
                toolMode === 'fill'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              Fill
            </button>
          </div>
        </div>

        {toolMode === 'brush' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Brush Size: {brushSize}px
            </label>
            <input
              type="range"
              min="1"
              max="50"
              value={brushSize}
              onChange={e => setBrushSize(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Color
          </label>
          <input
            type="color"
            value={brushColor}
            onChange={e => setBrushColor(e.target.value)}
            className="w-full h-10 rounded border border-gray-300 cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={handleSave}
            className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Save Image
          </button>
          <button
            onClick={handleClear}
            className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm font-medium transition-colors"
          >
            Clear Canvas
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaintOnline;
