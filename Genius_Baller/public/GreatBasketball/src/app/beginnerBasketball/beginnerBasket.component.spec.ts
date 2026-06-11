import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultComponent } from './beginnerBasket.component';

describe('AdultComponent', () => {
  let component: AdultComponent;
  let fixture: ComponentFixture<AdultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
