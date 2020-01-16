import { RECEIVE_COINS_INFOS, RECEIVE_COIN_INFO, RECEIVE_30DAY_INFO } from '../actions/coin_actions';


const coinReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)
    
    switch(action.type) {
        case RECEIVE_COINS_INFOS:
            return action.data;
        case RECEIVE_COIN_INFO:
            return action.data; 
        case RECEIVE_30DAY_INFO:
            return action.payload; 
        default: 
            return oldState;
    }
};

export default coinReducer; 