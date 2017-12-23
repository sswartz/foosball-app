import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorGridComponent } from './color-grid/color-grid.component';
import { TeamRowComponent } from './team-row/team-row.component';

const routes: Routes = [
  {path: '', component: TeamRowComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
