import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'new-game', pathMatch: 'full'},
  {path: 'new-game', loadChildren: './new-game/new-game.module#NewGameModule'},
  {path: 'users', loadChildren: './user-feature/user-feature.module#UserFeatureModule'},
  {path: 'glossary', loadChildren: './glossary-feature/glossary-feature.module#GlossaryFeatureModule'},
  {path: 'team-colors', loadChildren: './team-colors/team-colors.module#TeamColorsModule'},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
