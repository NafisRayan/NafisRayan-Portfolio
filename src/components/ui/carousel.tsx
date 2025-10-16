"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import type { PanInfo } from "framer-motion";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { MotionValue } from "framer-motion";
import Image from "next/image";

interface CarouselProps {
  slides: any[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  renderSlide: (slide: any, index: number, isActive: boolean) => React.ReactNode;
}

export default function Carousel({ slides, index, setIndex, renderSlide }: CarouselProps) {
  const translateXMultiplier = 36;
  const translateZMultiplier = 120;
  const rotateYMultiplier = -18;
  const scaleMin = 0.6;
  const maxVisibleCards = 3;

  const prev = React.useCallback(() => setIndex((s) => (s - 1 + slides.length) % slides.length), [slides.length, setIndex]);
  const next = React.useCallback(() => setIndex((s) => (s + 1) % slides.length), [slides.length, setIndex]);

  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // pointer-based drag handling (no visual dragging of container)
  const isPointerDown = useRef(false);
  const startXRef = useRef<number | null>(null);
  const pointerIdRef = useRef<number | null>(null);

  const onPointerDown = (e: React.PointerEvent) => {
    isPointerDown.current = true;
    startXRef.current = e.clientX;
    pointerIdRef.current = e.pointerId;
    // capture pointer to receive move/up events
    try {
      (e.target as Element).setPointerCapture(e.pointerId);
    } catch (err) {
      /* ignore */
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isPointerDown.current) return;
    // prevent text selection while dragging
    e.preventDefault();
  };

  const finishPointer = (clientX: number) => {
    const start = startXRef.current ?? clientX;
    const delta = clientX - start;
    const threshold = 80;
    if (delta > threshold) prev();
    else if (delta < -threshold) next();
    isPointerDown.current = false;
    startXRef.current = null;
    pointerIdRef.current = null;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isPointerDown.current) return;
    finishPointer(e.clientX);
    try {
      (e.target as Element).releasePointerCapture(e.pointerId);
    } catch (err) {
      /* ignore */
    }
  };

  const onPointerCancel = (e: React.PointerEvent) => {
    if (!isPointerDown.current) return;
    finishPointer(e.clientX);
  };

  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {/* decorative centered faded heading behind carousel (subtle) */}
      </div>

      <motion.div
        ref={carouselRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        className="relative flex items-center justify-center overflow-visible py-[20%] select-none"
      >
        {slides.map((s, i) => {
          const offset = i - index;
          // wrap offsets for circular feel
          const half = Math.floor(slides.length / 2);
          let normalized = offset;
          if (offset > half) normalized = offset - slides.length;
          if (offset < -half) normalized = offset + slides.length;

          const abs = Math.abs(normalized);
          const translateX = normalized * translateXMultiplier; // percent
          const translateZ = -abs * translateZMultiplier; // px
          const rotateY = normalized * rotateYMultiplier; // deg
          const scale = Math.max(scaleMin, 1 - abs * 0.12);
          const opacity = abs > maxVisibleCards ? 0 : 1 - abs * 0.25;

          // compute shadow and subtle brightness based on distance from center
          const shadowIntensity = Math.max(0, 28 - abs * 6); // px blur fallback
          const yOffset = Math.min(12, abs * 4);
          const spread = Math.max(0, 2 - abs * 0.5);
          // stronger, darker shadow for nearer cards; softer for far cards
          const boxShadow = `0 ${yOffset}px ${shadowIntensity}px ${spread}px rgba(0,0,0,${0.25 + Math.max(0, 0.15 - abs * 0.03)})`;
          // subtle brightness reduction for background cards so the centered card reads on top
          const brightness = abs === 0 ? 1 : 1 - Math.min(0.18, abs * 0.06);

          return (
            <motion.div
              key={s.id}
              initial={false}
              animate={{
                transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity: opacity,
              }}
              transition={{ type: "spring", stiffness: 140, damping: 20 }}
              onClick={() => {
                if (i !== index) setIndex(i);
              }}
              drag="x"
              dragConstraints={{ left: -120, right: 120 }}
              dragElastic={0.2}
              onDragEnd={(_e, info) => {
                const x = info.offset.x;
                const threshold = 80;
                if (x > threshold) prev();
                else if (x < -threshold) next();
              }}
              onPointerDown={(e) => e.stopPropagation()}
              style={{
                zIndex: 1000 - abs,
                touchAction: "none",
                // boxShadow,
                filter: `brightness(${brightness})`,
              }}
              className={`absolute w-[40vw] max-w-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform group ${
                i !== index ? "cursor-pointer" : ""
              }`}
            >
              {renderSlide(s, i, i === index)}
            </motion.div>
          );
        })}
      </motion.div>

      <div className="flex justify-center mt-4 space-x-4">
        <button onClick={prev} className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button onClick={next} className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}