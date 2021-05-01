import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../shared/user.model';
import { PaymentApiActions, TrialPageActions } from './actions';

interface CountryCode {
  country: string;
  code: string;
}

const Countries: CountryCode[] = [
  { country: 'Romania', code: '+40' },
  { country: 'Nigeria', code: '+234' },
  { country: 'Nicaragua', code: '+78' }
];

export interface PaymentState {
  user: User | null;
  loading: boolean;
  countries: CountryCode[];
}

export const initialState: PaymentState = {
  user: null,
  loading: false,
  countries: Countries
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
