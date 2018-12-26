import { SET_USER } from '../../actions';

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
        
        default: 
            return state;
    }
}