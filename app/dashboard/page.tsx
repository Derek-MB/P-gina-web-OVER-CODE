"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PlayerCard from "@/components/dashboard/PlayerCard";
import ProgressCard from "@/components/dashboard/ProgressCard";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import type { PlayerProfile } from "@/components/dashboard/types";
import AppShell from "@/components/layout/AppShell";
import SectionTitle from "@/components/ui/SectionTitle";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const router = useRouter();
  const [profile, setProfile] = useState<PlayerProfile | null>(null);

  useEffect(() => {
    async function loadProfile() {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      setProfile(data as PlayerProfile);
    }

    loadProfile();
  }, [router]);

  return <AppShell profile={profile}><main className="mx-auto max-w-7xl px-5 py-8 md:px-8"><SectionTitle description="Retoma tu progreso, revisa tus logros y prepárate para el próximo desafío." eyebrow="Centro de mando" title={`Bienvenido${profile?.display_name ? `, ${profile.display_name}` : ""}`} />{/* TODO: Agregar fondo del mapa o arte ambiental del videojuego. */}<div className="mt-8 grid gap-5 xl:grid-cols-3"><PlayerCard profile={profile} /><ProgressCard profile={profile} /><QuickActions /><RecentActivity profile={profile} /></div></main></AppShell>;
}
