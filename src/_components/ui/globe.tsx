"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import createGlobe from "cobe";

export default function GlobeSection() {
  return (
    <div className=" flex items-center  justify-center bg-black">
      <Globe className="w-[900px] h-[900px] " /> {/* Bigger size */}
    </div>
  );
}

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const rotation = useRef({ phi: 0, theta: 0 });

  const handlePointerDown = useCallback((e: PointerEvent) => {
    setIsDragging(true);
    lastMouse.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastMouse.current.x;
      const dy = e.clientY - lastMouse.current.y;

      rotation.current.phi += dx * 0.005;
      rotation.current.theta += dy * 0.005;

      // Clamp vertical tilt
      rotation.current.theta = Math.max(
        -Math.PI / 2,
        Math.min(Math.PI / 2, rotation.current.theta)
      );

      lastMouse.current = { x: e.clientX, y: e.clientY };
    },
    [isDragging]
  );

  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0;
    const canvas = canvasRef.current;
    let width = canvas.offsetWidth;

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [28.6139, 77.209], size: 0.07 },
      ],
      onRender: (state) => {
        if (!isDragging) phi += 0.0035; // Idle rotation
        state.phi = phi + rotation.current.phi;
        state.theta = rotation.current.theta;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    // Pointer events
    canvas.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    // Resize observer for responsiveness
    const resizeObserver = new ResizeObserver(() => {
      width = canvas.offsetWidth;
    });
    resizeObserver.observe(canvas);

    return () => {
      globe.destroy();
      resizeObserver.disconnect();
      canvas.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [handlePointerDown, handlePointerMove, handlePointerUp, isDragging]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "1200px",
        aspectRatio: 1,
        cursor: isDragging ? "grabbing" : "grab",
        touchAction: "none",
      }}
      className={className}
    />
  );
};
