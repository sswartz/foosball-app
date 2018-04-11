export class User {
  id: string;
  name: string;
  wins: number;
  losses: number;
  seasonwins: number;
  seasonIndex?: number;
  benchTime?: number;
  inSeasonWins?: number;
  inSeasonLosses?: number;
  inSeasonPoints?: number;
  inSeasonGoalsFor?: number;
  inSeasonGoalsAgainst?: number;
  inSeasonGoalDifferential?: number;
  tourneyScore?: number;
  tourneyWin?: boolean;
  tourneyLoss?: boolean;
  tourneyMatch?: boolean;
}
