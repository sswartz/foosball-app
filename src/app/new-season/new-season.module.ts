import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewSeasonRoutingModule } from './new-season-routing.module';
import { NewSeasonInputsComponent } from './new-season/new-season-inputs/new-season-inputs.component';
import { NewSeasonComponent } from './new-season/new-season.component';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/src/module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule, MatTabsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule,
         MatSelectModule,
         MatListModule,
         MatButtonModule } from '@angular/material';
import { MatTableModule, MatSortModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SeasonTableComponent } from './season-table/season-table.component';
import { SeasonTournamentComponent } from './new-season/season-tournament/season-tournament.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NewSeasonRoutingModule,
    MatGridListModule,
    FlexLayoutModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
  ],
  declarations: [NewSeasonInputsComponent, NewSeasonComponent, SeasonTableComponent, SeasonTournamentComponent]
})
export class NewSeasonModule { }
