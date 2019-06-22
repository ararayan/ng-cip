import { Component } from '@angular/core';
import { DialogConfig } from '../dialog/dialog-config';
import { DialogRef } from '../dialog/dialog-ref';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  constructor(
    private dialog: DialogRef,
    public config: DialogConfig
    ) {}
  onClose() {
    this.dialog.close();
  }
}
