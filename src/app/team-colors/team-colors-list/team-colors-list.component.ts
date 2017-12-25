import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ColorPalette } from '@app/core';

import { ColorPaletteService } from '@app/core';

@Component({
  selector: 'app-team-colors-list',
  templateUrl: './team-colors-list.component.html',
  styleUrls: ['./team-colors-list.component.scss']
})
export class TeamColorsListComponent implements OnInit {

  myColorPalettes: ColorPalette[];
  myTabs: [ColorPalette[]];

  constructor(private colorPaletteService: ColorPaletteService) { }

  ngOnInit() {
    this.myTabs = [[], []];
    this.setColorPalettes();
  }

  setColorPalettes(): void {
    this.colorPaletteService.getColorPalettes()
      .subscribe(colorPalettes => {
        this.myColorPalettes = colorPalettes;
        for (let i = 0; i < this.myColorPalettes.length; i++) {
          if (this.myColorPalettes[i].page === 1) {
            this.myTabs[0].push(this.myColorPalettes[i]);
          } else {
            this.myTabs[1].push(this.myColorPalettes[i]);
          }
        }
       }
      );

  }

}

