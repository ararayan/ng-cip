import { Component } from '@angular/core';
import { DialogService } from './dialog/dialog.service';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dialog';
  openDialog() {
    this.dialog.open(ExampleComponent, {
      data: 'abadf fsdklf kdslf sklfj a',
      test: 'extract message!!'
    });
  }
  constructor( private dialog: DialogService) {}
}
