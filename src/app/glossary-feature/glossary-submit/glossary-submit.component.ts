import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Glossary } from '@app/core';
import { GlossaryService } from '@app/core';

@Component({
  selector: 'app-glossary-submit',
  templateUrl: './glossary-submit.component.html',
  styleUrls: ['./glossary-submit.component.scss']
})
export class GlossarySubmitComponent implements OnInit {
  glossaryItem: Glossary;

  options: FormGroup;
  constructor(
    private fb: FormBuilder,
    private glossaryService: GlossaryService
  ) {
    this.options = fb.group({
      hideRequired: true,
      floatLevel: 'auto'
    });
  }

  ngOnInit() {
    this.glossaryItem = new Glossary();
  }

  addItem() {
    if (!!this.glossaryItem.name && this.glossaryItem.name !== ''
        && !!this.glossaryItem.description && this.glossaryItem.description !== '' ) {
      this.glossaryService.addGlossary(this.glossaryItem).subscribe();

    }

  }


}
