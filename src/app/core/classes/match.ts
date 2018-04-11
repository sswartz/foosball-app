export class Match {
  id: string;
  matchTypeId: number;
  blueUserId1: string;
  blueUserId2?: string;
  blueColorId: string;
  orangeUserId1: string;
  orangeUserId2?: string;
  orangeColorId: string;
  blueScore: number;
  orangeScore: number;
  date: Date;
  blueUserNames?: string;
  orangeUserNames?: string;
  constructor(
    blueScore: number,
    orangeScore: number,
    blueColorId: string,
    orangeColorId: string,
    date: Date,
    matchTypeId: number,
   ) {
     this.blueScore = blueScore;
     this.orangeScore = orangeScore;
     this.blueColorId = blueColorId;
     this.orangeColorId = orangeColorId;
     this.date = date;
     this.matchTypeId = matchTypeId;
     this.blueUserId1 = '-1';
     this.orangeUserId1 = '-1';
     this.blueUserId2 = '-1';
     this.orangeUserId2 = '-1';
     this.blueUserNames = '';
     this.orangeUserNames = '';
  }
}
