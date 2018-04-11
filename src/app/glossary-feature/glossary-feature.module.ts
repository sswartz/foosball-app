import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './glossary-feature-routing.module';
import { GlossaryTableComponent } from './glossary-table/glossary-table.component';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTableModule,
         MatInputModule,
         MatSelectModule,
         MatListModule,
         MatFormFieldModule,
         MatButtonModule } from '@angular/material';
import { GlossarySubmitComponent } from './glossary-submit/glossary-submit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    routing,
  ],
  declarations: [GlossaryTableComponent, GlossarySubmitComponent]
})
export class GlossaryFeatureModule { }
