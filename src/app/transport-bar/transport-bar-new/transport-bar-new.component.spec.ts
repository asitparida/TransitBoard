import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportBarNewComponent } from './transport-bar-new.component';

describe('TransportBarNewComponent', () => {
  let component: TransportBarNewComponent;
  let fixture: ComponentFixture<TransportBarNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportBarNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportBarNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
