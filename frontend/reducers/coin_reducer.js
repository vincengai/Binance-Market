import { RECEIVE_PRICE } from '../actions/coin_actions';


const coinReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)

    switch(action.type) {
        case RECEIVE_PRICE:
            newState[action.payload.symbol] = action.payload
            return newState;
        default: 
            return oldState;
    }
};

export default coinReducer; 