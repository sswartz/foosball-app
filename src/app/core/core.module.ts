/*** 3rd party libraries */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/*** our own custom services */
import { UserService } from './services/user.service';
import { MessageService } from './services/message.service';

/*** my own custom classes */
import { User } from './classes/user';

@NgModule({
  imports: [
    /*** 3rd party libraries */
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    /*** our own custom services  */
    UserService,
    MessageService,
    User,
  ]
})

export class CoreModule {
  /** make sure Core Module is imported only by one NgModule the AppModule */
  constructor (
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
