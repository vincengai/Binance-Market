import { RECEIVE_PRICE } from '../actions/coin_actions';


const coinReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)

    switch(action.type) {
        case RECEIVE_PRICE:
            newState[action.symbol] = action.price
            return newState;
        default: 
            return oldState;
    }
};

export default coinReducer; 