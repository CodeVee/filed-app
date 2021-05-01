import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer, featureKey } from './state/payment.reducer';

import { PaymentRoutingModule } from './payment-routing.module';
import { TrialComponent } from './trial/trial.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PaymentEffects } from './state/payment.effects';
import { fakeBackendProvider } from './shared/fake-backend.interceptor';


@NgModule({
  declarations: [
    TrialComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([ PaymentEffects ])
  ],
  providers: [fakeBackendProvider]
})
export class PaymentModule { }
