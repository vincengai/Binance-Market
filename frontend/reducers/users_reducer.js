import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_BUY_INFO, RECEIVE_SELL_INFO } from '../actions/transaction_actions'
import { merge } from 'lodash';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState; 

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
        
        case RECEIVE_BUY_INFO:
			// action.userData ==  { id: 17, email: 'demo@gmail.com', cash_balance: 3000, portfolio: {'BTC': 1} }
            // console.log(action.userData, "this is action.userData")

            newState = merge( {}, oldState, { [action.currentUser.id]: action.userData});
            newState[action.userData.id].portfolio = action.currentUser.portfolio;

            return newState;
        
        case RECEIVE_SELL_INFO:
            newState = merge({}, oldState, { [action.currentUser.id]: action.userData});
            newState[action.userData.id].portfolio = action.currentUser.portfolio; 

            return newState; 

        default:
            return oldState;
    }
};

export default usersReducer;
