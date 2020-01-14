import { RECEIVE_COINS_INFOS } from '../actions/coin_actions';


const coinReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)
    
    switch(action.type) {
        case RECEIVE_COINS_INFOS:
            console.log(action.data);
            return action.data;
        default: 
            return oldState;
    }
};

export default coinReducer; 