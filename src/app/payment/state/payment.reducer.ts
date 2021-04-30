import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../shared/user.model';
import { PaymentApiActions, TrialPageActions } from './actions';

export interface PaymentState {
  user: User | null;
  loading: boolean;
  errorMessage: string;
}

export const initialState: PaymentState = {
  user: null,
  loading: false,
  errorMessage: ''
};

export const featureKey = 'payment';

const opportunityReducer = createReducer(
  initialState,
  on(TrialPageActions.getFreeTrial, state => ({...state, loading: true })),
  on(PaymentApiActions.getFreeTrialSuccess, (state, { user }) => ({ ...state, user, loading: false})),
  on(PaymentApiActions.getFreeTrialFailure, state => ({...state, user: null, loading: false, errorMessage: 'Failed to save'})),
);

export function reducer(state: PaymentState | undefined, action: Action): PaymentState {
  return opportunityReducer(state, action);
}
