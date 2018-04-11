import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossarySubmitComponent } from './glossary-submit.component';

describe('GlossarySubmitComponent', () => {
  let component: GlossarySubmitComponent;
  let fixture: ComponentFixture<GlossarySubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlossarySubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlossarySubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
