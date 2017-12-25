/*** 3rd party libraries */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './user-feature.routing';
import { MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

/*** import feature components  */
import { UsersComponent } from '@app/user-feature/users/users.component';
import { UserDetailComponent } from '@app/user-feature/user-detail/user-detail.component';
import { UserSearchComponent } from '@app/user-feature/user-search/user-search.component';
import { MatchListComponent } from './user-detail/match-list/match-list.component';

/*** our own custom services */

@NgModule({
  imports: [
    /*** 3rd party libraries */
    CommonModule,
    FormsModule,
    routing,
    MatTableModule,
    FlexLayoutModule,
  ],
  declarations: [
    UsersComponent,
    UserDetailComponent,
    UserSearchComponent,
    MatchListComponent,
  ],
  providers: [
    /*** our own custom services  */
  ],
})
export class UserFeatureModule { }
