import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diary.FormComponent } from './diary.form.component';

describe('Diary.FormComponent', () => {
  let component: Diary.FormComponent;
  let fixture: ComponentFixture<Diary.FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diary.FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diary.FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
