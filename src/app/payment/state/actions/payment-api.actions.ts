import { User } from '../../shared/user.model';
import { createAction, props } from '@ngrx/store';

export const getFreeTrialSuccess = createAction(
  '[Payment API] Get Free Trial Success',
  props<{ user: User }>()
);

export const getFreeTrialFailure = createAction(
  '[Payment API] Get Free Trial Failure'
);
