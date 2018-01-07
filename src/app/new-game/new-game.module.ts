import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewGameRoutingModule } from './new-game-routing.module';
import { NewMatchComponent } from './new-match/new-match.component';
import { OneVOneMatchComponent } from './new-match/one-v-one-match/one-v-one-match.component';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/src/module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule, MatTabsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule,
         MatSelectModule,
         MatListModule,
         MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NewGameRoutingModule,
    MatGridListModule,
    FlexLayoutModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [NewMatchComponent, OneVOneMatchComponent]
})
export class NewGameModule { }
