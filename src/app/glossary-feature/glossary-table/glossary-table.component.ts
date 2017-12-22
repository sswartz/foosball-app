import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-glossary-table',
  templateUrl: './glossary-table.component.html',
  styleUrls: ['./glossary-table.component.scss']
})
export class GlossaryTableComponent implements OnInit {
  displayedColumns = ['position', 'name', 'description'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }

}

export interface Element {
  name: string;
  position: number;
  description: string;
}
const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Tip-Tap', description: 'Receiving a pass from the midfield with the wing, a quick pass to the center and a shot' },
  {position: 2, name: 'Super Move', description: 'Shooting a clear ball attempt right back at your opponent'}
];
