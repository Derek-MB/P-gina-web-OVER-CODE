import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
}

const variants = {
  primary: "bg-[var(--oc-primary)] text-[#EADCCD] hover:bg-[var(--oc-primary-hover)]",
  secondary: "bg-[var(--oc-teal)] text-[#EADCCD] hover:brightness-110",
  ghost: "border border-[var(--oc-border)] bg-transparent text-[var(--oc-text)] hover:bg-[var(--oc-surface-raised)]",
};

export default function Button({ children, className = "", fullWidth = false, type = "button", variant = "primary", ...props }: ButtonProps) {
  return <button className={`rounded-xl px-4 py-3 text-sm font-semibold transition duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[var(--oc-accent)]/70 disabled:cursor-not-allowed disabled:opacity-60 ${fullWidth ? "w-full" : ""} ${variants[variant]} ${className}`} type={type} {...props}>{children}</button>;
}
