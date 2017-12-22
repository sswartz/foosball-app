import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './glossary-feature-routing.module';
import { GlossaryTableComponent } from './glossary-table/glossary-table.component';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    MatTableModule,
    routing,
  ],
  declarations: [GlossaryTableComponent]
})
export class GlossaryFeatureModule { }
