import { Component, OnInit } from '@angular/core';

import { Subject, ReplaySubject } from 'rxjs';
import { last } from 'rxjs/operators';

@Component({
  selector: 'app-replaysubject',
  templateUrl: './replaysubject.component.html',
  styleUrls: ['./replaysubject.component.css']
})
export class ReplaysubjectComponent implements OnInit {

  constructor() { }

  ngOnInit () {
    // from https://stackoverflow.com/questions/52299704/subject-pipelast-vs-replaysubject1
    const subject = new Subject();
    const s1 = subject.pipe(last());
    s1.subscribe(val => console.log('first subscription', val));
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.complete();
    s1.subscribe(val => console.log('second subscription', val));

    const s2 = new ReplaySubject(1);
    s2.subscribe(val => console.log('first subscription', val));
    s2.next(1);
    s2.next(2);
    s2.next(3);
    s2.complete();
    s2.subscribe(val => console.log('second subscription', val));
  }

}
