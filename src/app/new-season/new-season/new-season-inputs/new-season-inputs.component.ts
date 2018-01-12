import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '@app/core';
import { MatchService } from '@app/core';
import { User } from '@app/core';
import { Match } from '@app/core';

@Component({
  selector: 'app-new-season-inputs',
  templateUrl: './new-season-inputs.component.html',
  styleUrls: ['./new-season-inputs.component.scss']
})
export class NewSeasonInputsComponent implements OnInit {
  users: User[];
  options: FormGroup;
  userNumbers: number[] = [4, 5, 6];
  numberOfUsers: number;

  constructor(
    private userService: UserService,
    private matchService: MatchService,
    private fb: FormBuilder,
  ) {
    this.options = fb.group({
      hideRequired: true,
      floatLevel: 'auto'
    });
  }

  ngOnInit() {
  }
  setUserAmount(userNumber: number): void {
    this.numberOfUsers = userNumber;
  }

}
