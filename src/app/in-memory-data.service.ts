import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, name: 'Stuart Swartz', wins: 2, losses: 0, seasonWins: 0},
      { id: 2, name: 'Evan Hickle', wins: 1, losses: 1, seasonWins: 0 },
      { id: 3, name: 'McPhartz', wins: 0, losses: 2, seasonWins: 0 },
      { id: 4, name: 'Tommy Baer', wins: 0, losses: 0, seasonWins: 0 },
      { id: 5, name: 'Rob Freedy', wins: 0, losses: 0, seasonWins: 0 },
      { id: 6, name: 'Ryan Fish', wins: 0, losses: 0, seasonWins: 0 },
      { id: 7, name: 'Jack Toscano', wins: 0, losses: 0, seasonWins: 0 },
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
        title: 'ND Colors',
        page: 1,
        remoteNumber: 1,
        colors: [
          '#000080', '#DAA520', '#000080', '#DAA520',
          '#000080', '#DAA520', '#000080', '#DAA520',
          '#000080', '#DAA520', '#000080', '#DAA520',
          '#000080', '#DAA520', '#000080', '#DAA520',
        ]
      },
      {
        id: 2,
        title: 'Cavs Colors',
        page: 1,
        remoteNumber: 2,
        colors: [
        '#ae0001', '#E4A600', '#ae0001', '#E4A600',
        '#ae0001', '#E4A600', '#000078', '#ae0001',
        '#E4A600', '#ae0001', '#E4A600', '#ae0001',
        '#E4A600', '#000078', '#ae0001', '#E4A600'
        ]
      },
      {
        id: 3,
        title: 'Archer Colors',
        page: 1,
        remoteNumber: 3,
        colors: [
          '#FB8000', '#FB8000', '#0288D1', '#FB8000',
          '#FB8000', '#0288D1', '#FB8000', '#FB8000',
          '#0288D1', '#FB8000', '#FB8000', '#0288D1',
          '#FB8000', '#FB8000', '#0288D1', '#FB8000',
        ]
      },
      {
        id: 4,
        title: 'Candy Canes',
        page: 1,
        remoteNumber: 4,
        colors: [
          '#ff2400', '#AFABAB', '#ff2400', '#AFABAB',
          '#ff2400', '#AFABAB', '#ff2400', '#AFABAB',
          '#ff2400', '#AFABAB', '#ff2400', '#AFABAB',
          '#ff2400', '#AFABAB', '#ff2400', '#AFABAB'
        ]
      },
      {
        id: 5,
        title: 'Pat Colors Fibonaccish',
        page: 1,
        remoteNumber: 5,
        colors: [
          '#00FFEC', '#00FFEC', '#00FFEC', '#00FFEC',
          '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',
          '#0016FF', '#0016FF', '#0016FF', '#0016FF',
          '#EEFF00', '#EEFF00', '#EEFF00', '#EEFF00',
        ]
      },
      {
        id: 6,
        title: 'Pat Colors Green',
        page: 1,
        remoteNumber: 6,
        colors: [
          '#00DA1A', '#00DA1A', '#E90000', '#E90000',
          '#00FFEC', '#00FFEC', '#00DA1A', '#00DA1A',
          '#E90000', '#E90000', '#00FFEC', '#00FFEC',
          '#00DA1A', '#00DA1A', '#E90000', '#E90000',
        ]
      },
      {
        id: 7,
        title: 'Site Colors',
        page: 2,
        remoteNumber: 1,
        colors: [
          '#D86600', '#D86600', '#D86600', '#D86600',
          '#D86600', '#000000', '#005B95', '#005B95',
          '#005B95', '#005B95', '#000000', '#00923D',
          '#00923D', '#00923D', '#00923D', '#000000',
        ]
      },
      {
        id: 8,
        title: 'Tetris',
        page: 2,
        remoteNumber: 2,
        colors: [
          '#D10035', '#D10035', '#D10035', '#019C4F',
          '#019C4F', '#FFFFFF', '#00A2CB', '#00A2CB',
          '#00A2CB', '#FF5900', '#FF5900', '#FFFFFF',
          '#F1B000', '#F1B000', '#F1B000', '#FFFFFF',
        ]
      },
      {
        id: 9,
        title: 'Cool Colors',
        page: 2,
        remoteNumber: 3,
        colors: [
          '#2500FF', '#0040FF', '#00B0FF', '#00FFFF',
          '#00FF8E', '#26FF00', '#DAFF00', '#FFF700',
          '#2500FF', '#0040FF', '#00B0FF', '#00FFFF',
          '#00FF8E', '#26FF00', '#DAFF00', '#FFF700',
        ]
      },
      {
        id: 10,
        title: 'Ninties Cup 2',
        page: 2,
        remoteNumber: 4,
        colors: [
          '#530075', '#530075', '#00DBDD', '#00DBDD',
          '#530075', '#530075', '#00DBDD', '#00DBDD',
          '#530075', '#530075', '#00DBDD', '#00DBDD',
          '#530075', '#530075', '#00DBDD', '#00DBDD',
        ]
      },
      {
        id: 11,
        title: 'Crayons',
        page: 2,
        remoteNumber: 5,
        colors: [
          '#FF0000', '#000000', '#AB5500', '#000000',
          '#ABAB00', '#000000', '#00FF00', '#000000',
          '#00AB55', '#000000', '#0000FF', '#000000',
          '#5500AB', '#000000', '#AB0055', '#000000'
        ]
      },
      {
        id: 12,
        title: 'Cotton Candies',
        page: 3,
        remoteNumber: 91,
        colors: [
          '#375166', '#375166', '#375166', '#375166',
          '#BE2A28', '#BE2A28', '#375166', '#375166',
          '#375166', '#375166', '#375166', '#BE2A28',
          '#BE2A28', '#375166', '#375166', '#375166',
        ]
      },
      {
        id: 13,
        title: 'Nineties Cup',
        page: 3,
        remoteNumber: 2,
        colors: [
          '#530075', '#530075', '#530075', '#530075',
          '#530075', '#530075', '#530075', '#530075',
          '#00DBDD', '#00DBDD', '#00DBDD', '#00DBDD',
          '#00DBDD', '#00DBDD', '#00DBDD', '#00DBDD',
        ]
      },
      {
        id: 14,
        title: 'Underwater Lava',
        page: 3,
        remoteNumber: 3,
        colors: [
          '#FFA101', '#FFA101', '#FFA101', '#00D3B2',
          '#00D3B2', '#00D3B2', '#00A5B4', '#00A5B4',
          '#00A5B4', '#00407E', '#00407E', '#00407E',
          '#00407E', '#F85B00', '#F85B00', '#F85B00',
        ]
      },
      {
        id: 15,
        title: 'Fire',
        page: 3,
        remoteNumber: 4,
        colors: [
          '#000000', '#800000', '#000000', '#800000',
          '#8B0000', '#800000', '#8B0000', '#8B0000',
          '#8B0000', '#FF0000', '#FFA500', '#FFFFFF',
          '#FFA500', '#FF0000', '#8B0000', '#000000',
        ]
      },
      {
        id: 16,
        title: 'Site Colors 2',
        page: 3,
        remoteNumber: 5,
        colors: [
          '#E67E22', '#E67E22', '#E67E22', '#E67E22', '#E67E22', '#E67E22',
          '#2471A3', '#2471A3', '#2471A3', '#2471A3', '#2471A3',
          '#229954', '#229954', '#229954', '#229954', '#229954',
        ]
      },
      {
        id: 17,
        title: 'Rainbow Colors',
        page: 3,
        remoteNumber: 6,
        colors: [
          '#FF0000', '#D52A00', '#AB5500', '#AB7F00',
          '#ABAB00', '#56D500', '#00FF00', '#00D52A',
          '#00AB55', '#0056AA', '#0000FF', '#2A00D5',
          '#5500AB', '#7F0081', '#AB0055', '#D5002B',
        ]
      },
      {
        id: 19,
        title: 'Cubs Colors',
        page: 4,
        remoteNumber: 1,
        colors: [
          '#002f6c', '#c8102e', '#ffffff', '#002f6c',
          '#c8102e', '#ffffff', '#002f6c', '#c8102e',
          '#ffffff', '#002f6c', '#c8102e', '#ffffff',
          '#002f6c', '#c8102e', '#ffffff', '#c8102e',
        ]
      },
      {
        id: 19,
        title: 'Noir',
        page: 4,
        remoteNumber: 2,
        colors: [
          '#FFFFFF', '#000000', '#FFFFFF', '#000000',
          '#FFFFFF', '#000000', '#FFFFFF', '#000000',
          '#FFFFFF', '#000000', '#FFFFFF', '#000000',
          '#FFFFFF', '#000000', '#FFFFFF', '#000000',
        ]
      },
      {
        id: 19,
        title: 'Mardi Gras',
        page: 4,
        remoteNumber: 3,
        colors: [
          '#00D600', '#00D600', '#530075', '#530075',
          '#00D600', '#00D600', '#530075', '#530075',
          '#00D600', '#00D600', '#530075', '#530075',
          '#00D600', '#00D600', '#530075', '#530075',
        ]
      },
      {
        id: 19,
        title: 'Retro ND',
        page: 4,
        remoteNumber: 4,
        colors: [
          '#00B827', '#00B827', '#00B827', '#00B827',
          '#EAF500', '#EAF500', '#EAF500', '#EAF500',
          '#00B827', '#00B827', '#00B827', '#00B827',
          '#EAF500', '#EAF500', '#EAF500', '#EAF500',
        ]
      },
      {
        id: 19,
        title: 'Metro 3',
        page: 4,
        remoteNumber: 5,
        colors: [
          '#FF4200', '#FF4200', '#FF4200', '#FF4200',
          '#EAF500', '#EAF500', '#EAF500', '#EAF500',
          '#00F534', '#00F534', '#00F534', '#00F534',
          '#00A3F5', '#00A3F5', '#00A3F5', '#00A3F5',
        ]
      },
      {
        id: 19,
        title: 'Vikings',
        page: 4,
        remoteNumber: 6,
        colors: [
          '#FBF115', '#FBF115', '#FBF115', '#FBF115',
          '#9B29FF', '#9B29FF', '#9B29FF', '#9B29FF',
          '#FBF115', '#FBF115', '#FBF115', '#FBF115',
          '#9B29FF', '#9B29FF', '#9B29FF', '#9B29FF',
        ]
      },
      {
        id: 24,
        title: 'Morse Code',
        page: 5,
        remoteNumber: 1,
        colors: [
          '#003ECF', '#A91E00', '#A91E00', '#003ECF', '#003ECF', '#A91E00',
            '#007116',
           '#003ECF', '#003ECF', '#A91E00',
           '#007116', '#DED700',
           '#003ECF', '#A91E00', '#003ECF',
           '#000000'
        ]
      }
    ];
  const matches = [
  {id: 1, matchTypeId: 1, blueUserId1: 1, blueUserId2: -1, orangeUserId1: 2, orangeUserId2: -1,
    blueScore: 6, orangeScore: 2, date: new Date(), blueColorId: 1, orangeColorId: 2,
    blueUserName1: 'Stuart Swartz', blueUserName2: '',  orangeUserName1: '', orangeUserName2: ''},
  {id: 2, matchTypeId: 1, blueUserId1: 3, blueUserId2: -1, orangeUserId1: 2, orangeUserId2: -1,
    blueScore: 4, orangeScore: 6, date: new Date(), blueColorId: 3, orangeColorId: 2,
   blueUserName1: '', orangeUserName1: '', blueUserName2: '', orangeUserName2: ''},
  {id: 3, matchTypeId: 1, blueUserId1: 3, blueUserId2: -1, orangeUserId1: 1, orangeUserId2: -1,
    blueScore: 6, orangeScore: 4, date: new Date(), blueColorId: 3, orangeColorId: 2,
    blueUserName1: '', orangeUserName1: '', blueUserName2: '', orangeUserName2: ''},
];
    return {users, glossary, colorPalette, matches};
  }
}
