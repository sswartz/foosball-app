import {ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'detail/:id', component: UserDetailComponent},
  {path: 'search', component: UserSearchComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
