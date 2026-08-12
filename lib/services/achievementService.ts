import { supabase } from "@/lib/supabase";

export interface Achievement {
  id: string;
  code: string;
  name: string;
  description: string;
  icon_path: string | null;
  category: string | null;
  sort_order: number;
  active: boolean;
  created_at: string;
}

export interface AchievementWithUnlock extends Achievement {
  unlocked_at: string | null;
}

interface UserAchievement {
  achievement_id: string;
  unlocked_at: string;
}

export async function getAchievementsForUser(userId: string): Promise<AchievementWithUnlock[]> {
  const [{ data: achievementsData, error: achievementsError }, { data: unlockedData, error: unlockedError }] = await Promise.all([
    supabase.from("achievements").select("id, code, name, description, icon_path, category, sort_order, active, created_at").order("sort_order", { ascending: true }),
    supabase.from("user_achievements").select("achievement_id, unlocked_at").eq("user_id", userId),
  ]);

  if (achievementsError) throw achievementsError;
  if (unlockedError) throw unlockedError;

  const unlockDates = new Map(((unlockedData ?? []) as UserAchievement[]).map((achievement) => [achievement.achievement_id, achievement.unlocked_at]));
  return ((achievementsData ?? []) as Achievement[]).map((achievement) => ({ ...achievement, unlocked_at: unlockDates.get(achievement.id) ?? null }));
}
