import { Component, OnInit } from '@angular/core';
import { ColorPalette } from '@app/core';

@Component({
  selector: 'app-team-colors-list',
  templateUrl: './team-colors-list.component.html',
  styleUrls: ['./team-colors-list.component.scss']
})
export class TeamColorsListComponent implements OnInit {

  myColorPalettes: ColorPalette[];
  constructor() { }

  ngOnInit() {
    this.setColorPalettes();
  }

  setColorPalettes(): void {
    this.myColorPalettes = COLORS;
  }

}
const COLORS: ColorPalette[] = [
  {
    title: 'Test Palette',
    colors: ['#CD5C5C', '#F08080', '#FA8072', '#E9967A']
  },
  {
    title: 'Test Palette 2',
    colors: ['#9B29FF', '#FF29F8', '#FF298D', '#FF3029']
  }
];

