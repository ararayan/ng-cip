import { Subject } from 'rxjs';

export class DialogRef {
  private readonly close$ = new Subject<any>();
  public afterClosed = this.close$.asObservable();
  constructor() {}
  close( result?: any) {
    this.close$.next(result);
  }
}
