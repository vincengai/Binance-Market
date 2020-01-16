import  * as CryptoMarket from '../util/coin_api_util';

export const RECEIVE_COINS_INFOS = 'RECEIVE_COINS_INFOS';
export const RECEIVE_COIN_INFO = 'RECEIVE_COIN_INFO';
export const RECEIVE_30DAY_INFO = 'RECEIVE_30DAY_INFO';

const receive30DayInfo = (payload) => {
    return {
        type: RECEIVE_30DAY_INFO,
        payload
    }
}

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

export const fetch30DayInfo = symbol => dispatch => {
    return CryptoMarket.fetch30DayInfo(symbol)
        .then(
            (payload) => dispatch(receive30DayInfo(symbol, payload))
        )
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
