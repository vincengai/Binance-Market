import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_BUY_INFO, RECEIVE_SELL_INFO } from '../actions/transaction_actions'
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState; 

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        
        case RECEIVE_BUY_INFO:
            newState = merge( {}, state, { [action.currentUser.id]: action.tradeInfo});
            newState[action.tradeInfo.id].portfolio = action.currentUser.portfolio;

            return newState;
        
        case RECEIVE_SELL_INFO:
            newState = merge({}, state, { [action.currentUser.id]: action.tradeInfo});
            newState[action.tradeInfo.id].portfolio = action.currentUser.portfolio; 

            return newState; 

        default:
            return state;
    }
};

export default usersReducer;
