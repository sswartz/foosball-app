import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, name: 'Stuart Swartz', wins: 2, losses: 0, seasonWins: 0},
      { id: 2, name: 'Evan Hickle', wins: 1, losses: 1, seasonWins: 0 },
      { id: 3, name: 'Lenny McPhartz', wins: 0, losses: 2, seasonWins: 0 },
      { id: 4, name: 'Tommy Baer', wins: 0, losses: 0, seasonWins: 0 },
      { id: 5, name: 'Rob Freedy', wins: 0, losses: 0, seasonWins: 0 },
      // { id: 16, name: 'Jack Magiera' },
      // { id: 17, name: 'Pat Wieland' },
      // { id: 18, name: 'Bobby Fischer' },
      // { id: 19, name: 'Ted Cogan' },
      // { id: 20, name: 'Sarah Votaw' }
    ];
    const glossary = [
      { id: 1, name: 'Super Move', description: 'Shooting a clear ball attempt right back at your opponent'},
      { id: 2, name: 'Tip-tap', description: 'Receiving a pass from the midfield with the wing, a quick pass to the center and a shot'}
    ];
    const colorPalette = [
      {
        id: 1,
        title: 'Test Palette Reds',
        page: 1,
        remoteNumber: 1,
        colors: ['#CD5C5C', '#F08080', '#FA8072', '#E9967A',
                '#CD5C5C', '#F08080', '#FA8072', '#E9967A',
                '#CD5C5C', '#F08080', '#FA8072', '#E9967A',
                '#CD5C5C', '#F08080', '#FA8072', '#E9967A',
        ]
      },
      {
        id: 2,
        title: 'Test Palette Randoms',
        page: 1,
        remoteNumber: 2,
        colors: ['#9B29FF', '#FF29F8', '#FF298D', '#FF3029',
                '#9B29FF', '#FF29F8', '#FF298D', '#FF3029',
                '#9B29FF', '#FF29F8', '#FF298D', '#FF3029',
                '#9B29FF', '#FF29F8', '#FF298D', '#FF3029'
        ]
      },
      {
        id: 3,
        title: 'App Color Scheme',
        page: 1,
        remoteNumber: 3,
        colors: [
          '#229954', '#FBFCFC', '#E67E22', '#2471A3',
          '#229954', '#FBFCFC', '#E67E22', '#2471A3',
          '#229954', '#FBFCFC', '#E67E22', '#2471A3',
          '#229954', '#FBFCFC', '#E67E22', '#2471A3',
        ]
      },
      {
        id: 4,
        title: 'App Color Scheme 2',
        page: 2,
        remoteNumber: 1,
        colors: [
          '#229954', '#229954', '#229954', '#229954',
          '#FBFCFC', '#FBFCFC', '#FBFCFC', '#FBFCFC',
          '#E67E22', '#E67E22', '#E67E22', '#E67E22',
          '#2471A3', '#2471A3', '#2471A3', '#2471A3',
        ]
      }
    ];
  const matches = [
  {id: 1, matchTypeId: 1, blueUserId1: 1, blueUserId2: -1, orangeUserId1: 2, orangeUserId2: 2,
    blueScore: 6, orangeScore: 2, date: new Date(), blueColorId: 1, orangeColorId: 2,
    blueUserName1: 'Stuart Swartz', blueUserName2: '',  orangeUserName1: '', orangeUserName2: ''},
  {id: 2, matchTypeId: 1, blueUserId1: 3, blueUserId2: -1, orangeUserId1: 2, orangeUserId2: -1,
    blueScore: 6, orangeScore: 4, date: new Date(), blueColorId: 3, orangeColorId: 2,
   blueUserName1: '', orangeUserName1: '', blueUserName2: '', orangeUserName2: ''},
  {id: 3, matchTypeId: 1, blueUserId1: 3, blueUserId2: -1, orangeUserId1: 1, orangeUserId2: -1,
    blueScore: 6, orangeScore: 4, date: new Date(), blueColorId: 3, orangeColorId: 2,
    blueUserName1: '', orangeUserName1: '', blueUserName2: '', orangeUserName2: ''},
];
    return {users, glossary, colorPalette, matches};
  }
}
