export class User {
  id: number;
  name: string;
  wins: number;
  losses: number;
  seasonWins: number;
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
