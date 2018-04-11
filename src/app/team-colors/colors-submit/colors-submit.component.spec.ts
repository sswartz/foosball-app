import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsSubmitComponent } from './colors-submit.component';

describe('ColorsSubmitComponent', () => {
  let component: ColorsSubmitComponent;
  let fixture: ComponentFixture<ColorsSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
