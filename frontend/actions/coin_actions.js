import  CryptoMarket  from '../util/coin_api_util';

export const RECEIVE_PRICE = 'RECEIVE_PRICE';



const receiveCurrentPrice = (data) => ({
    type: RECEIVE_PRICE,
    price: data.display.symbol.usd.price
});


export const fetchCurrentPrice = (data) => {
    return CryptoMarket.fetchCurrentPrice(symbol)
        .then( 
            (data) => dispatchEvent(receiveCurrentPrice(data)), 
            (error) => dispatch(receiveErrors(error.responseJSON))
        )
};


// either filter in your actions

