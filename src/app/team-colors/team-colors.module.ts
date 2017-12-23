import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './team-colors-routing.module';
import { ColorGridComponent } from './color-grid/color-grid.component';
import { TeamRowComponent } from './team-row/team-row.component';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    routing,
    FlexLayoutModule,
  ],
  declarations: [ColorGridComponent, TeamRowComponent]
})
export class TeamColorsModule { }
