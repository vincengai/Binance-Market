import  * as CryptoMarket from '../util/coin_api_util';

export const RECEIVE_COINS_INFOS = 'RECEIVE_COINS_INFOS';


const receiveCoinsInfos = (data) => {
    // debugger
    return {
        type: RECEIVE_COINS_INFOS,
        data
    }
};

export const fetchCoinsInfo = () => dispatch => {
    return CryptoMarket.fetchCoinsInfo()
        .then( 
            (data) => dispatch(receiveCoinsInfos(data)), 
        )
};
