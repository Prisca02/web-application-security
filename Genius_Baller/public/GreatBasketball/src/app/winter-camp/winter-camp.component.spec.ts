import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterCampComponent } from './winter-camp.component';

describe('WinterCampComponent', () => {
  let component: WinterCampComponent;
  let fixture: ComponentFixture<WinterCampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinterCampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
