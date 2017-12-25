import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { GlossaryService } from '@app/core';

@Component({
  selector: 'app-glossary-table',
  templateUrl: './glossary-table.component.html',
  styleUrls: ['./glossary-table.component.scss']
})
export class GlossaryTableComponent implements OnInit {
  displayedColumns = ['id', 'name', 'description'];
  dataSource;
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private glossaryService: GlossaryService) { }

  ngOnInit() {
    this.getGlossary();
  }

  getGlossary(): void {
    this.glossaryService.getGlossary()
      .subscribe(glossary => this.dataSource = new MatTableDataSource(glossary));
  }

}

export interface Element {
  id: number;
  name: string;
  description: string;
}
const ELEMENT_DATA: Element[] = [
  {id: 1, name: 'Tip-Tap', description: 'Receiving a pass from the midfield with the wing, a quick pass to the center and a shot' },
  {id: 2, name: 'Super Move', description: 'Shooting a clear ball attempt right back at your opponent'}
];
