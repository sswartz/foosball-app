import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, name: 'Stuart Swartz' },
      { id: 12, name: 'Evan Hickle' },
      { id: 13, name: 'Lenny McPhartz' },
      { id: 14, name: 'Tommy Baer' },
      { id: 15, name: 'Rob Freedy' },
      { id: 16, name: 'Jack Magiera' },
      { id: 17, name: 'Pat Wieland' },
      { id: 18, name: 'Bobby Fischer' },
      { id: 19, name: 'Ted Cogan' },
      { id: 20, name: 'Sarah Votaw' }
    ];
    return {users};
  }
}
