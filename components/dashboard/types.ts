export type PlayerProfile = {
  id: string;
  display_name: string | null;
  avatar: string | null;
  current_level: number;
  highest_unlocked_level: number;
  experience: number;
  progress: number;
  play_time_seconds: number;
  games_played: number;
  attempts: number;
  correct_answers: number;
  wrong_answers: number;
  coins: number;
};
