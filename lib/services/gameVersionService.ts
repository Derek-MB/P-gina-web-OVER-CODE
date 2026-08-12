import { supabase } from "@/lib/supabase";

export interface GameVersion {
  version: string;
  download_url: string;
  release_notes: string | null;
  is_current: boolean;
  published_at: string;
}

export async function getCurrentGameVersion(): Promise<GameVersion | null> {
  const { data, error } = await supabase
    .from("game_versions")
    .select("version, download_url, release_notes, is_current, published_at")
    .eq("is_current", true)
    .maybeSingle();

  if (error) throw error;
  return data as GameVersion | null;
}
