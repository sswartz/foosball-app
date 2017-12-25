import { Component, OnInit, Input } from '@angular/core';
import { ColorGridComponent } from '../color-grid/color-grid.component';
import { Tile } from '@app/core';
import { ColorPalette } from '@app/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-team-row',
  templateUrl: './team-row.component.html',
  styleUrls: ['./team-row.component.scss']
})
export class TeamRowComponent implements OnInit {

  @Input() colorPalette: ColorPalette;
  myTiles: Tile[];
  title: string;
  remoteNumber: number;

  constructor() { }

  ngOnInit() {
    this.myTiles = [];
    this.setTileColors();
    this.setPaletteTitle();
  }
  setTileColors(): void {
    // TODO: refactor to include constant
    for (let i = 0; i < 16; i++) {
      const tile: Tile = {
        color: this.colorPalette.colors[i],
        text: '',
        cols: 1,
        rows: 1
       };
       this.myTiles.push(tile);
    }
  }

  setPaletteTitle(): void {
    this.title = this.colorPalette.title;
    this.remoteNumber = this.colorPalette.remoteNumber;
  }

}

const TILES: Tile[] = [
  {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
  {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
];
