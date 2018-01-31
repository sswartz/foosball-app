import { Component, OnChanges, Input, SimpleChanges, ViewChild, AfterViewInit} from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MatchService } from '@app/core';
import { User } from '@app/core';
import { Match } from '@app/core';

@Component({
  selector: 'app-season-table',
  templateUrl: './season-table.component.html',
  styleUrls: ['./season-table.component.scss']
})
export class SeasonTableComponent implements OnChanges, AfterViewInit {
  dataSource;
  @Input() userData: User[];
  displayedColumns = [ 'name', 'inSeasonPoints', 'inSeasonWins', 'inSeasonLosses',
   'inSeasonGoalsFor', 'inSeasonGoalsAgainst', 'inSeasonGoalDifferential' ];

   @ViewChild(MatSort) sort: MatSort;

   /**
    * Set the sort after the view init since this component will
    * be able to query its view for the initialized sort.
    */
   ngAfterViewInit() {
   }

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userData']) {
      this.dataSource = new MatTableDataSource(this.userData);
     this.dataSource.sort = this.sort;
    }
  }

}
