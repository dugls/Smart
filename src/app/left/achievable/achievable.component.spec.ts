import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievableComponent } from './achievable.component';

describe('AchievableComponent', () => {
  let component: AchievableComponent;
  let fixture: ComponentFixture<AchievableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
