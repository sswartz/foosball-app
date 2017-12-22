/*** 3rd party libraries */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './user-feature.routing';

/*** inport feature components  */
import { UsersComponent } from '@app/user-feature/users/users.component';
import { UserDetailComponent } from '@app/user-feature/user-detail/user-detail.component';
import { UserSearchComponent } from '@app/user-feature/user-search/user-search.component';

/*** our own custom services */

@NgModule({
  imports: [
    /*** 3rd party libraries */
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [
    UsersComponent,
    UserDetailComponent,
    UserSearchComponent,
  ],
  providers: [
    /*** our own custom services  */
  ],
})
export class UserFeatureModule { }
