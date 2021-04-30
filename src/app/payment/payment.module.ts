import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
