import {createReducer} from '@reduxjs/toolkit';
import {signIn} from '../actions';

export type AuthenticationState = {};

const INITIAL_STATE: AuthenticationState = {};

export const authenticationReducer = createReducer(INITIAL_STATE, (builder) =>
  builder.addCase(signIn, (state) =>
    Object.assign(state, {isAuthenticating: true}),
  ),
);
