import * as CoinAction from '../actions/coin_actions';


const coinReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    // let newState = Object.assign({}, oldState)
    
    switch(action.type) {
        case CoinAction.RECEIVE_COINS_INFOS:
            return action.data;
        case CoinAction.RECEIVE_COIN_INFO:
            return action.data; 
        case CoinAction.RECEIVE_30DAY_INFO:
            return action.data; 
        case CoinAction.RECEIVE_1WEEK_INFO:
            return action.data;
        case CoinAction.RECEIVE_1WEEK_INFO:
            return action.data;
        case CoinAction.RECEIVE_1MONTH_INFO:
            return action.data;
        case CoinAction.RECEIVE_1YEAR_INFO:
            return action.data;
        case CoinAction.RECEIVE_1DAY_INFO:
            return action.data;
        case CoinAction.RECEIVE_NEWS_INFO:
            return action.data;
        default: 
            return oldState;
    }
};

export default coinReducer; 