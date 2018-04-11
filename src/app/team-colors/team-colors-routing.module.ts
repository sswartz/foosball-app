import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorGridComponent } from './color-grid/color-grid.component';
import { TeamRowComponent } from './team-row/team-row.component';
import { TeamColorsListComponent } from './team-colors-list/team-colors-list.component';
import { ColorsSubmitComponent } from './colors-submit/colors-submit.component';

const routes: Routes = [
  {path: '', component: TeamColorsListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
