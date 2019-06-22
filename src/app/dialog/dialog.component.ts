import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy, Type, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, AfterViewInit, OnDestroy {
  childComponentType: Type<any>;
  componentRef: ComponentRef<any>;
  private readonly _onClose = new Subject<any>();
  public onClose = this._onClose.asObservable();
  @ViewChild('dialogContainer', {read: ViewContainerRef}) dialogContainer: ViewContainerRef;
  constructor(
    private cfr: ComponentFactoryResolver,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    // We are changing the view (by adding a child component),
    // but angular thinks it is already done with the view-part.
    // That’s why the hook is called AFTERViewInit.
    // This would result in an ExpressionChangedAfterItHasBeenCheckedError.
    // To prevent that, we need to tell angular to re-run change detection after we have added the component.
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }
  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
  private loadChildComponent(componentType: Type<any>) {
    const componentFactory = this.cfr.resolveComponentFactory(componentType);
    this.dialogContainer.clear();
    this.componentRef = this.dialogContainer.createComponent(componentFactory);
  }
  onOverlayClicked(evt: MouseEvent) {
    // close the dialog
  }
  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }
}
