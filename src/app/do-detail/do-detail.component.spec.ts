import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoDetailComponent } from './do-detail.component';

describe('DoDetailComponent', () => {
  let component: DoDetailComponent;
  let fixture: ComponentFixture<DoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
