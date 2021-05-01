import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from '../shared/user.model';
import { getLoading, State } from '../state';
import { getFreeTrial } from '../state/actions/trial-page.actions';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss']
})
export class TrialComponent implements OnInit {

  trialForm!: FormGroup;
  loading = this.store.select(getLoading);
  request: User = {
    firstName: '',
    lastName: '',
    email: '',
    monthlyBudget: 0,
    phoneNumber: 0
  };

  constructor(private fb: FormBuilder, private store: Store<State>) { }

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
    this.store.dispatch(getFreeTrial({ user : this.request }));
  }

}
