import { Injectable } from '@angular/core';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PaymentApiActions, TrialPageActions } from './actions';
import { PaymentService } from '../shared/payment.service';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable()
export class PaymentEffects {

  constructor(private actions$: Actions, private paymentService: PaymentService,
              private toast: HotToastService) { }

  loadClientOpportunities$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(TrialPageActions.getFreeTrial),
        mergeMap(action => this.paymentService.postUser(action.user)
          .pipe(
            map(user => {
              this.toast.success('Sign up successful. Click the Home link or go back to see the message');
              return PaymentApiActions.getFreeTrialSuccess({ user });
            }),
            catchError(() => {
              this.toast.error('Error during signup process');
              return of(PaymentApiActions.getFreeTrialFailure());
            })
          )
        )
      );
  });
}
