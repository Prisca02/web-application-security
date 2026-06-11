import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesVideosComponent } from './classes-videos.component';

describe('ClassesVideosComponent', () => {
  let component: ClassesVideosComponent;
  let fixture: ComponentFixture<ClassesVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
