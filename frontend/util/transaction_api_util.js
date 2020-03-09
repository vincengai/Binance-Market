


export const buyCoin = (tradeInfo) => {
    return $.ajax({
        method: 'POST',
        url: 'api/wallet_transactions',
        data: { tradeInfo }
        // TradeInfo = {user_id: 1, symbol: 'BTC', quantity: '1', price: '5000'}
    });
}

export const sellCoin = (tradeInfo) => {
    return $.ajax ({
    method: 'POST',
    url: 'api/wallet_transactions',
    data: { tradeInfo }
        // TradeInfo = {user_id: 1, symbol: 'BTC', quantity: '-1', price: '5000'}

    });
}