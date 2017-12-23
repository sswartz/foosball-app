import { Component, OnInit } from '@angular/core';
import { ColorGridComponent } from '../color-grid/color-grid.component';
import { Tile } from '@app/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-team-row',
  templateUrl: './team-row.component.html',
  styleUrls: ['./team-row.component.scss']
})
export class TeamRowComponent implements OnInit {
  myTiles = TILES;

  constructor() { }

  ngOnInit() {
  }

}

const TILES: Tile[] = [
  {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
  {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
];
