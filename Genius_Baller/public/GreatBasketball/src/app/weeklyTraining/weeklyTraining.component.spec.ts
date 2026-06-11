import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyTrainingComponent } from './weeklyTraining.component';

describe('YouthComponent', () => {
  let component: WeeklyTrainingComponent;
  let fixture: ComponentFixture<WeeklyTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
