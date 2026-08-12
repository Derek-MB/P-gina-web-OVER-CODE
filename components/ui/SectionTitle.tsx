interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return <div>{eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--oc-accent)]">{eyebrow}</p>}<h1 className="text-3xl font-bold tracking-tight text-[var(--oc-text)] sm:text-4xl">{title}</h1>{description && <p className="mt-2 text-sm text-[var(--oc-muted)]">{description}</p>}</div>;
}
