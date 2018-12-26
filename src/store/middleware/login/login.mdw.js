import { VERIFY_USER, SET_USER } from '../../actions';
import { Users } from '../../../constants';

export const loginMiddleware = store => next => action => {
    if (action.type === VERIFY_USER) {
        for (let i = 0; i < Users.length; i++) {
            if (action.payload === Users[i].name) {
                store.dispatch({
                    type: SET_USER,
                    payload: action.payload
                });
            }
        }
    }

    return next(action);
};