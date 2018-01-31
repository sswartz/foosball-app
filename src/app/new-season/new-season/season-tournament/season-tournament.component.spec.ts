import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonTournamentComponent } from './season-tournament.component';

describe('SeasonTournamentComponent', () => {
  let component: SeasonTournamentComponent;
  let fixture: ComponentFixture<SeasonTournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonTournamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
