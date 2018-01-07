import { Component } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navList: any;
  selected: any;
  title1 = 'Rocket';
  title2= 'Foosball';

  constructor() {
    this.navList = [
      {name: 'New Game', link: 'new-game'},
      {name: 'Users', link: 'users'},
      {name: 'Glossary', link: 'glossary'},
      {name: 'Team Colors', link: 'team-colors'}
    ];
    // TODO: add selected item on refresh
  }
  select(item) {
    this.selected = item;
  }
  isActive(item) {
    return this.selected === item;
  }
}
