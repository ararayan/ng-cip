import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaysubjectComponent } from './replaysubject.component';

describe('ReplaysubjectComponent', () => {
  let component: ReplaysubjectComponent;
  let fixture: ComponentFixture<ReplaysubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaysubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaysubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
