import * as Transaction_Util from '../util/transaction_api_util';

export const RECEIVE_BUY_INFO = 'RECEIVE_BUY_INFO';
export const RECEIVE_SELL_INFO = 'RECEIVE_SELL_INFO';


// Thunk Action Creators 

export const buyCoin = (buyInfo) => dispatch => {
    return Transaction_Util.buyCoin(buyInfo)
        .then( 
            (response) => {
                return dispatch(receiveBuyCoin(response))      // ? response == { id: 17, email: 'demo@gmail.com', cash_balance: 3000, portfolio: {'BTC': 1} }
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
    


// Action Creators => Hits the Users Reducers

export const receiveBuyCoin = (userData) => {  // ? userData == { id: 17, email: 'demo@gmail.com', cash_balance: 3000, portfolio: {'BTC': 1} }
    return {
        type: RECEIVE_BUY_INFO,
        data: userData 
    }
};

export const receiveSellCoin = ( userData ) => {
    return {
        type: RECEIVE_SELL_INFO,
        data: userData 
    }
};
