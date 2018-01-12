import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSeasonInputsComponent } from './new-season-inputs.component';

describe('NewSeasonInputsComponent', () => {
  let component: NewSeasonInputsComponent;
  let fixture: ComponentFixture<NewSeasonInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSeasonInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSeasonInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
