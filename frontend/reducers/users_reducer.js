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
            newState = merge( {}, oldState, { [action.data.currentUser_id]: action.data});      
            newState[action.data.currentUser_id].portfolio = action.data.portfolio;         
                                                                                       
            return newState;
        
        case RECEIVE_SELL_INFO:
            newState = merge({}, oldState, { [action.data.currentUser_id]: action.data});
            newState[action.data.currentUser_id].portfolio = action.data.portfolio; 

            return newState; 

        default:
            return oldState;
    }
};

export default usersReducer;
