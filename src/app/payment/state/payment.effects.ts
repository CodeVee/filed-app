import { Injectable } from '@angular/core';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PaymentApiActions, TrialPageActions } from './actions';
import { PaymentService } from '../shared/payment.service';

@Injectable()
export class PaymentEffects {

  constructor(private actions$: Actions, private paymentService: PaymentService) { }

  loadClientOpportunities$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(TrialPageActions.getFreeTrial),
        mergeMap(action => this.paymentService.postUser(action.user)
          .pipe(
            map(user => PaymentApiActions.getFreeTrialSuccess({ user })),
            catchError(() => of(PaymentApiActions.getFreeTrialFailure()))
          )
        )
      );
  });
}
