import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColorPalette } from '@app/core';
import { ColorPaletteService } from '@app/core';

@Component({
  selector: 'app-colors-submit',
  templateUrl: './colors-submit.component.html',
  styleUrls: ['./colors-submit.component.scss']
})
export class ColorsSubmitComponent implements OnInit {
  colorPalette: ColorPalette;

  options: FormGroup;
  constructor(
    private fb: FormBuilder,
    private colorPaletteService: ColorPaletteService
  ) {
    this.options = fb.group({
      hideRequired: true,
      floatLevel: 'auto'
    });
  }

  ngOnInit() {
    this.colorPalette = new ColorPalette();
  }

  addItem() {
    this.colorPaletteService.addColorPalette(this.colorPalette).subscribe();
  }

}
