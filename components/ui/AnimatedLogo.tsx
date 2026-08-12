"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface AnimatedLogoProps {
  className?: string;
  compact?: boolean;
}

const frames = ["/images/Titulo OVER CODE1.png", "/images/Titulo OVER CODE2.png"];

export default function AnimatedLogo({ className = "", compact = false }: AnimatedLogoProps) {
  const [frame, setFrame] = useState(0);
  const [hasImageError, setHasImageError] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => setFrame((current) => (current + 1) % frames.length), 500);
    return () => window.clearInterval(timer);
  }, []);

  if (hasImageError) return <span className={`font-black tracking-[0.16em] text-[var(--oc-accent)] ${className}`}>OVER CODE</span>;

  return <Image alt="OVER CODE" className={`h-auto w-auto object-contain ${className}`} height={compact ? 36 : 72} onError={() => setHasImageError(true)} src={frames[frame]} width={compact ? 180 : 360} />;
}
