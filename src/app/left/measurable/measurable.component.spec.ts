import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurableComponent } from './measurable.component';

describe('MeasurableComponent', () => {
  let component: MeasurableComponent;
  let fixture: ComponentFixture<MeasurableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
