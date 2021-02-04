// Transaction Api Util 
// The buyCurrency cauess a POST request to create a new walletTransaction to the backend, and UPDATE wallet value
// This is an AJAX request make to the heroku backend and this function is called
// In the thunk action middleware, and dispatched thru mapDispatchToProps to components


export const buyCoin = (tradeInfo) => {
    return $.ajax({
        method: 'POST',
        url: 'api/wallet_transactions',
        data: { transaction: tradeInfo } // tradeInfo under the key of transaction
        // transaction = {user_id: 1, symbol: 'BTC', quantity: '1.0', price: '5000.0'}
    });
}

// promise = buyCurrency(purchaseInfo)
// promise.responseJSON == { id: 2, email: 'demo@gmail.com', cash_balance: 2000, portfolio: {'BTC': 1} }

export const sellCoin = (tradeInfo) => {
    return $.ajax ({
    method: 'POST',
    url: 'api/wallet_transactions',
    data: { transaction: tradeInfo }
        // transaction = {user_id: 1, symbol: 'BTC', quantity: '-1.0', price: '5000'.0}
    });
}
