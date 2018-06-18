import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcomponentComponent } from './qrcomponent.component';

describe('QrcomponentComponent', () => {
  let component: QrcomponentComponent;
  let fixture: ComponentFixture<QrcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
