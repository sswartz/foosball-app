import { Component, OnInit, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material';
import { Tile } from '@app/core';

@Component({
  selector: 'app-color-grid',
  templateUrl: './color-grid.component.html',
  styleUrls: ['./color-grid.component.scss']
})
export class ColorGridComponent implements OnInit {

  @Input() tiles: Tile[];

  constructor() { }

  ngOnInit() {
    console.log(this.tiles);
  }

}
