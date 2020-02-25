import  * as CryptoMarket from '../util/coin_api_util';

export const RECEIVE_COINS_INFOS = 'RECEIVE_COINS_INFOS';
export const RECEIVE_COIN_INFO = 'RECEIVE_COIN_INFO';
export const RECEIVE_30DAY_INFO = 'RECEIVE_30DAY_INFO';
export const RECEIVE_1WEEK_INFO = 'RECEIVE_1WEEK_INFO';
export const RECEIVE_1MONTH_INFO = 'RECEIVE_1MONTH_INFO';
export const RECEIVE_1YEAR_INFO = 'RECEIVE_1YEAR_INFO';
export const RECEIVE_1DAY_INFO = 'RECEIVE_1DAY_INFO';
export const RECEIVE_NEWS_INFO = 'RECEIVE_NEWS_INFO';

// ACTION CREATORS
const receiveNewsInfo = (data) => {
    return {
        type: RECEIVE_NEWS_INFO,
        data
    }
}
const receive30DayInfo = (data) => {
    return {
        type: RECEIVE_30DAY_INFO,
        data
    }
};

const receiveCoinsInfos = (data) => {
    return {
        type: RECEIVE_COINS_INFOS,
        data
    }
};

const receive1WeekInfo = (data) => {
    return {
        type: RECEIVE_1WEEK_INFO,
        data
    }
};

const receive1MonthInfo = (data) => {
    return {
        type: RECEIVE_1MONTH_INFO,
        data
    }
};
const receive1YearInfo = (data) => {
    return {
        type: RECEIVE_1YEAR_INFO,
        data
    }
};
const receive1DayInfo = (data) => {
    return {
        type: RECEIVE_1DAY_INFO,
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

// THUNK ACTION CREATORS
// export const fetchNewsInfo = (symbol) => dispatch => {
//     return CryptoMarket.fetchNews(symbol)
//         .then( 
//             (data) => dispatch(receiveNewsInfo, data)
//         )   
// }

export const fetch30DayInfo = (symbol) => dispatch => {
    return CryptoMarket.fetch30DayInfo(symbol)
        .then(
            (data) => dispatch(receive30DayInfo(symbol, data))
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

export const fetch1MonthInfo = (symbol) => dispatch => {
    return CryptoMarket.fetch1MonthInfo(symbol)
        .then( 
            (data) => dispatch(receive1MonthInfo(data)), 
        )
};
export const fetch1WeekInfo = (symbol) => dispatch => {
    return CryptoMarket.fetch1WeekInfo(symbol)
        .then( 
            (data) => dispatch(receive1WeekInfo(data)), 
        )
};

export const fetch1YearInfo = (symbol) => dispatch => {
    return CryptoMarket.fetch1YearInfo(symbol)
        .then( 
            (data) => dispatch(receive1YearInfo(data)), 
        )
};

export const fetch1DayInfo = (symbol) => dispatch => {
    return CryptoMarket.fetch1DayInfo(symbol)
        .then( 
            (data) => dispatch(receive1DayInfo(data)), 
        )
};
