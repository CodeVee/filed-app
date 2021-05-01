import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PaymentState, featureKey } from './payment.reducer';

export interface State  {
  payment: PaymentState;
}

// Selector functions
const getPaymentFeatureState = createFeatureSelector<State, PaymentState>(featureKey);

export const getUser = createSelector(
    getPaymentFeatureState,
    state => state.user
);

export const getLoading = createSelector(
  getPaymentFeatureState,
  state => state.loading
);

export const getErrorMessage = createSelector(
  getPaymentFeatureState,
  state => state.errorMessage
);
