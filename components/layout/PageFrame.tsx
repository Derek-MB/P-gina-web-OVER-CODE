import type { ReactNode } from "react";
import type { PlayerProfile } from "@/components/dashboard/types";
import SectionTitle from "@/components/ui/SectionTitle";
import AppShell from "./AppShell";

interface PageFrameProps {
  children: ReactNode;
  profile: PlayerProfile | null;
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageFrame({ children, profile, eyebrow, title, description }: PageFrameProps) {
  return <AppShell profile={profile}><main className="mx-auto max-w-7xl px-5 py-8 md:px-8"><SectionTitle description={description} eyebrow={eyebrow} title={title} /><div className="mt-8">{children}</div></main></AppShell>;
}
