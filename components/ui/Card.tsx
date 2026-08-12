import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return <section className={`rounded-2xl border border-[var(--oc-border)] bg-[var(--oc-surface)] p-5 shadow-[0_12px_35px_rgba(2,9,26,0.18)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--oc-accent)]/45 ${className}`}>{children}</section>;
}
