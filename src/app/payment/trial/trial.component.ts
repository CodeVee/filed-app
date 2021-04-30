import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss']
})
export class TrialComponent implements OnInit {

  trialForm!: FormGroup;
  loading = false;
  request: User = {
    firstName: '',
    lastName: '',
    email: '',
    monthlyBudget: 0,
    phoneNumber: 0
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.trialForm = this.fb.group({
      firstName: [ this.request.firstName, Validators.required],
      lastName: [ this.request.lastName, Validators.required],
      email: [ this.request.email, Validators.email],
      monthlyBudget: [ null , Validators.required],
      phone: [ null, Validators.required]
    });
  }

  onSubmit(): void {
    this.loading = true;
    setTimeout(() => {
      console.log(this.trialForm.value, this.trialForm.valid);
      this.loading = false;
    }, 2000);
  }

}
