"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { PlayerProfile } from "@/components/dashboard/types";
import { supabase } from "@/lib/supabase";

interface PlayerProfileState {
  profile: PlayerProfile | null;
  userId: string | null;
  isLoading: boolean;
}

export function usePlayerProfile(): PlayerProfileState {
  const router = useRouter();
  const [profile, setProfile] = useState<PlayerProfile | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPlayer() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }

      setUserId(user.id);
      const { data, error } = await supabase.from("profiles").select("*").eq("id", user.id).single();
      if (error) console.error(error);
      else setProfile(data as PlayerProfile);
      setIsLoading(false);
    }

    loadPlayer();
  }, [router]);

  return { profile, userId, isLoading };
}
