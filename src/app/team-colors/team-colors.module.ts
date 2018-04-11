import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './team-colors-routing.module';
import { ColorGridComponent } from './color-grid/color-grid.component';
import { TeamRowComponent } from './team-row/team-row.component';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatGridListModule,
         MatTableModule,
         MatInputModule,
         MatSelectModule,
         MatListModule,
         MatFormFieldModule,
         MatButtonModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TeamColorsListComponent } from './team-colors-list/team-colors-list.component';
import { ColorsSubmitComponent } from './colors-submit/colors-submit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatGridListModule,
    routing,
    FlexLayoutModule,
    MatTabsModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  declarations: [ColorGridComponent, TeamRowComponent, TeamColorsListComponent, ColorsSubmitComponent]
})
export class TeamColorsModule { }
