import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportBarDetailedComponent } from './transport-bar-detailed.component';

describe('TransportBarDetailedComponent', () => {
  let component: TransportBarDetailedComponent;
  let fixture: ComponentFixture<TransportBarDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportBarDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportBarDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
