export class Match {
  id: number;
  matchTypeId: number;
  blueUserId1: number;
  blueUserId2: number;
  blueColorId: number;
  orangeUserId1: number;
  orangeUserId2: number;
  orangeColorId: number;
  blueScore: number;
  orangeScore: number;
  date: Date;
  blueUserName1: string;
  blueUserName2: string;
  orangeUserName1: string;
  orangeUserName2: string;
  constructor(
    blueScore: number,
    orangeScore: number,
    blueColorId: number,
    orangeColorId: number,
    date: Date,
    matchTypeId: number,
   ) {
     this.blueScore = blueScore;
     this.orangeScore = orangeScore;
     this.blueColorId = blueColorId;
     this.orangeColorId = orangeColorId;
     this.date = date;
     this.matchTypeId = matchTypeId;
     this.blueUserId1 = -1;
     this.orangeUserId1 = -1;
     this.blueUserId2 = -1;
     this.orangeUserId2 = -1;
     this.blueUserName1 = '';
     this.orangeUserName1 = '';
     this.blueUserName2 = '';
     this.orangeUserName2 = '';
  }
}
