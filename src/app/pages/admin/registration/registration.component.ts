import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form!: FormGroup;

  registrationSwitcherValue: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  execRiderRegistration(): void {
    this.registrationSwitcherValue = false;
  }

  execJudgeRegistration(): void {
    this.registrationSwitcherValue = true;
  }


}
