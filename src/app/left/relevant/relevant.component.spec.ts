import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevantComponent } from './relevant.component';

describe('RelevantComponent', () => {
  let component: RelevantComponent;
  let fixture: ComponentFixture<RelevantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelevantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelevantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
