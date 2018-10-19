import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportBarComponent } from './transport-bar.component';

describe('TransportBarComponent', () => {
  let component: TransportBarComponent;
  let fixture: ComponentFixture<TransportBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
