import { Injectable, ApplicationRef, Injector, EmbeddedViewRef, Type, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { DialogModule } from './dialog.module';
import { DialogComponent } from './dialog.component';
import { dialogConfigToken } from './dialog-config.token';
import { DialogConfig, CustomDialogConfig } from './dialog-config';
import { DialogRef } from './dialog-ref';


@Injectable({
  providedIn: DialogModule
})
export class DialogService {
  dialogComponentRef: ComponentRef<DialogComponent>;
  dialogInjector: Injector;
  dialogConfig: DialogConfig;
  dialogRef: DialogRef;
  constructor(
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }
  private appendDialogComponentToBody(config: CustomDialogConfig) {
    this.dialogConfig = config;
    this.dialogRef = new DialogRef();
    const componentFactory = this.cfr.resolveComponentFactory(DialogComponent);
    // every time new a injector for dialog,
    // is there a way to reuse the same injector ?
    // if ( !this.dialogInjector ) {
    this.dialogInjector = Injector.create([
      {
        provide: DialogConfig,
        useValue: this.dialogConfig
      },
      {
        provide: DialogRef,
        useValue: this.dialogRef
      }
    ], this.injector);
    // }

    const sub = this.dialogRef.afterClosed.subscribe(() => {
      // close the dialog
      this.removeDialogComponentFromBody();
      sub.unsubscribe();
    });

    const componentRef = componentFactory.create(this.dialogInjector);
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.dialogComponentRef = componentRef;
    this.dialogComponentRef.instance.onClose.subscribe(() => {
      this.removeDialogComponentFromBody();
    });
    return this.dialogRef;

  }
  public open(componentType: Type<any>, config: CustomDialogConfig) {
      const dialogRef = this.appendDialogComponentToBody(config);
      this.dialogComponentRef.instance.childComponentType = componentType;
      return dialogRef;
  }
  private removeDialogComponentFromBody() {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }
}
