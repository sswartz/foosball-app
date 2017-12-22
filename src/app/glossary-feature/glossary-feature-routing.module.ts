import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlossaryTableComponent } from './glossary-table/glossary-table.component';

const routes: Routes = [
  {path: '', component: GlossaryTableComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
