import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from '../shared/user.model';
import { getCountries, getLoading, State } from '../state';
import { getFreeTrial } from '../state/actions/trial-page.actions';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss']
})
export class TrialComponent implements OnInit {

  trialForm!: FormGroup;
  loading$ = this.store.select(getLoading);
  countries$ = this.store.select(getCountries);
  value = '+234';
  request: User = {
    firstName: '',
    lastName: '',
    email: '',
    monthlyBudget: 0,
    phoneNumber: ''
  };

  codeSelector = new FormControl(this.value);

  constructor(private fb: FormBuilder, private store: Store<State>) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.trialForm = this.fb.group({
      firstName: [ this.request.firstName, [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      lastName: [ this.request.lastName, [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      email: [ this.request.email, Validators.email],
      monthlyBudget: [ null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      phone: [ null, [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  validateControl(controlName: string): boolean {
    const control = this.trialForm.get(controlName) as AbstractControl;
    return control.touched && control.errors !== null;
  }

  onSubmit(): void {

    const { firstName, lastName, email, monthlyBudget, phone } = this.trialForm.value;

    const phoneNumber = `${this.codeSelector.value} ${phone}`;
    const user: User = {
      firstName, lastName, email, monthlyBudget, phoneNumber
    };

    this.store.dispatch(getFreeTrial({ user }));
    setTimeout(() => {
      this.initializeForm();
    }, 2000);
  }

}
