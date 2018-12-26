import { combineReducers } from 'redux';
import { loginReducer } from './login/login.reducer';

export const familyAppReducers = combineReducers({
    user: loginReducer
});