import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { dialogConfigToken } from './dialog-config.token';


@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [
    DialogComponent
  ]
})
export class DialogModule { }
