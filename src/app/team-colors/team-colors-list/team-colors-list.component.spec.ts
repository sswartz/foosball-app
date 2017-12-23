import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamColorsListComponent } from './team-colors-list.component';

describe('TeamColorsListComponent', () => {
  let component: TeamColorsListComponent;
  let fixture: ComponentFixture<TeamColorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamColorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamColorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
