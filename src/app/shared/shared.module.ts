/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { MatButtonModule } from '@angular/material';

/* our own custom components */
// import { SomeCustomComponent } from './some-custom/some-custom.component';

@NgModule({
  imports: [
    /* angular stuff */
    CommonModule,
    FormsModule,

    /* 3rd party components */
    MatButtonModule,
  ],
  declarations: [
    // SomeCustomComponent
  ],
  exports: [
    /* angular stuff */
    CommonModule,
    FormsModule,

    /* 3rd party components */
    MatButtonModule,

    /* our own custom components */
    // SomeCustomComponent
  ]
})
export class SharedModule { }
