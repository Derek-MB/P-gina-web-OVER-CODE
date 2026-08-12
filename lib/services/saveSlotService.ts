import { supabase } from "@/lib/supabase";

export interface SaveSlot {
  id: string;
  user_id: string;
  slot_number: number;
  slot_name: string | null;
  last_played_at: string | null;
  world_name: string | null;
  current_level: number;
  highest_unlocked_level: number;
  play_time_seconds: number;
  game_version: string | null;
  player_position: unknown;
  inventory: unknown;
  game_state: unknown;
  sync_version: number | null;
  created_at: string;
  updated_at: string;
}

export async function getSaveSlotsForUser(userId: string): Promise<SaveSlot[]> {
  const { data, error } = await supabase
    .from("save_slots")
    .select("id, user_id, slot_number, slot_name, last_played_at, world_name, current_level, highest_unlocked_level, play_time_seconds, game_version, player_position, inventory, game_state, sync_version, created_at, updated_at")
    .eq("user_id", userId)
    .order("slot_number", { ascending: true });

  if (error) throw error;
  return (data ?? []) as SaveSlot[];
}
