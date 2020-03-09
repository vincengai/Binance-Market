


export const buyCoin = (transaction) => {
    return $.ajax({
        method: 'POST',
        url: 'api/wallet_transactions',
        data: { transaction }
        // transaction = {user_id: 1, symbol: 'BTC', quantity: '1', price: '5000'}
    });
}

export const sellCoin = (transaction) => {
    return $.ajax ({
    method: 'POST',
    url: 'api/wallet_transactions',
    data: { transaction }
        // transaction = {user_id: 1, symbol: 'BTC', quantity: '-1', price: '5000'}
    });
}