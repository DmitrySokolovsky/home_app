import { SET_USER, LOG_OUT } from '../../actions';

const initialState = {
    state: 'INITIAL',
    user: ''
};

export function loginReducer(state = initialState, action) {
    switch(action.type) {
        case SET_USER:
            return {
                state,
                user: action.payload
            };

        case LOG_OUT: 
            return {
                state,
                user: ''
            };
        
        default: 
            return state;
    }
}