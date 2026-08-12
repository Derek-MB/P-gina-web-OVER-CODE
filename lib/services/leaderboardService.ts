import { supabase } from "@/lib/supabase";

export interface LeaderboardEntry {
  user_id: string;
  username: string;
  display_name: string | null;
  avatar: string | null;
  current_level: number;
  highest_unlocked_level: number;
  experience: number;
  progress: number;
  achievement_count: number;
  ranking_score: number;
  updated_at: string;
}

export async function getTopLeaderboardEntries(): Promise<LeaderboardEntry[]> {
  const { data, error } = await supabase
    .from("leaderboard_entries")
    .select("user_id, username, display_name, avatar, current_level, highest_unlocked_level, experience, progress, achievement_count, ranking_score, updated_at")
    .order("ranking_score", { ascending: false })
    .limit(10);

  if (error) throw error;
  return (data ?? []) as LeaderboardEntry[];
}
