import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportBarModeComponent } from './transport-bar-mode.component';

describe('TransportBarModeComponent', () => {
  let component: TransportBarModeComponent;
  let fixture: ComponentFixture<TransportBarModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportBarModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportBarModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
