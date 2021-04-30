import { User } from '../../shared/user.model';
import { createAction, props } from '@ngrx/store';

export const getFreeTrial = createAction(
  '[Trial Page] Get Free Trial',
    props<{ user: User }>()
);
