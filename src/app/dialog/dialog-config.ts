export class DialogConfig < D = any> {
  data?: D;
}

export class CustomDialogConfig extends DialogConfig {
  [key: string]: any;
}
