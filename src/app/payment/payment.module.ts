import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { PaymentRoutingModule } from './payment-routing.module';
import { TrialComponent } from './trial/trial.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    TrialComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PaymentModule { }
