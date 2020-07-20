import * as CoinAction from '../actions/coin_actions';


const coinReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    // let newState = Object.assign({}, oldState)
    
    switch(action.type) {
        case CoinAction.RECEIVE_COINS_INFOS:
            return action.data;

            // CORRECT
            //newState = merge({},
            //    oldState,
            //  { [action.payload.symbol]: action.payload })
            // newState == {price: 11645.05, changePct24HR: -1.0162682825865141}

        case CoinAction.RECEIVE_COIN_INFO:
            return action.data; 
        case CoinAction.RECEIVE_30DAY_INFO:
            return action.data; 
        // case CoinAction.RECEIVE_1WEEK_INFO:
        //     return action.data;
        // case CoinAction.RECEIVE_1WEEK_INFO:
        //     return action.data;
        // case CoinAction.RECEIVE_1MONTH_INFO:
        //     return action.data;
        // case CoinAction.RECEIVE_1YEAR_INFO:
        //     return action.data;
        // case CoinAction.RECEIVE_1DAY_INFO:
        //     return action.data;
        case CoinAction.RECEIVE_NEWS_INFO:
            return action.data;
        default: 
            return oldState;
    }
};

export default coinReducer; 