import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@app/dashboard/dashboard.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'users', loadChildren: './user-feature/user-feature.module#UserFeatureModule'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
