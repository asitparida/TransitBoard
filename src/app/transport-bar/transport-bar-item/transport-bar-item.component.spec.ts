import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportBarItemComponent } from './transport-bar-item.component';

describe('TransportBarItemComponent', () => {
  let component: TransportBarItemComponent;
  let fixture: ComponentFixture<TransportBarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportBarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
