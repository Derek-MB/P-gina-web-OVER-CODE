"use client";

import Image from "next/image";
import { useState } from "react";

interface GameScreenshotProps {
  alt: string;
  src: string;
  title: string;
}

export default function GameScreenshot({ alt, src, title }: GameScreenshotProps) {
  const [hasImageError, setHasImageError] = useState(false);

  return <article className="overflow-hidden rounded-2xl border border-[var(--oc-border)] bg-[var(--oc-surface)]"><div className="relative flex aspect-video items-center justify-center bg-[var(--oc-surface-raised)]">{hasImageError ? <span className="text-sm font-semibold text-[var(--oc-muted)]">Arte del mundo pendiente</span> : <Image alt={alt} className="object-cover" fill onError={() => setHasImageError(true)} sizes="(max-width: 768px) 100vw, 33vw" src={src} />}</div><p className="p-5 font-bold">{title}</p></article>;
}
