import * as Transaction_Util from '../util/transaction_api_util';

export const RECEIVE_BUY_INFO = 'RECEIVE_BUY_INFO';
export const RECEIVE_SELL_INFO = 'RECEIVE_SELL_INFO';


// Thunk Action Creators 

export const buyCoin = (buyInfo) => dispatch => {
    return Transaction_Util.buyCoin(buyInfo)
        .then( 
            (response) => {
                return dispatch(receiveBuyCoin(response))
            }
        )
};
    
export const sellCoin = (sellInfo) => dispatch => {
    return Transaction_Util.sellCoin(sellInfo)
        .then( 
            (response) => {
                return dispatch(receiveSellCoin(response))
            }
        )
};
    


// Action Creators => Hits the User Reducer

export const receiveBuyCoin = ( tradeInfo ) => {
    return {
        type: RECEIVE_BUY_INFO,
        data: tradeInfo 
    }
};

export const receiveSellCoin = ( tradeInfo ) => {
    return {
        type: RECEIVE_SELL_INFO,
        data: tradeInfo 
    }
};
