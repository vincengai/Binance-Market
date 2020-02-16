import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_BUY_INFO, RECEIVE_SELL_INFO } from '../actions/transaction_actions'

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        
        case RECEIVE_BUY_INFO:
            
        default:
            return state;
    }
};

export default usersReducer;
