import  * as CryptoMarket from '../util/coin_api_util';

export const RECEIVE_COINS_INFOS = 'RECEIVE_COINS_INFOS';
export const RECEIVE_COIN_INFO = 'RECEIVE_COIN_INFO';

const receiveCoinsInfos = (data) => {
    // debugger
    return {
        type: RECEIVE_COINS_INFOS,
        data
    }
};

const receiveCoinInfo = (symbol, data) => {
    return {
        type: RECEIVE_COIN_INFO,
        symbol,
        data
    }
};

export const fetchCoinInfo = (symbol) => dispatch => {
    return CryptoMarket.fetchCoinInfo(symbol) 
        .then(
            (data) => dispatch(receiveCoinInfo(symbol, data))
        )
};

export const fetchCoinsInfo = () => dispatch => {
    return CryptoMarket.fetchCoinsInfo()
        .then( 
            (data) => dispatch(receiveCoinsInfos(data)), 
        )
};
