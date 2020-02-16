
export const buyCoin = (tradeInfo) => {
    return $.ajax({
        method: 'POST',
        url: 'api/wallet_transactions',
        data: { tradeInfo }
    });
}

export const sellCoin = (tradeInfo) => {
    return $.ajax ({
    method: 'POST',
    url: 'api/wallet_transactions',
    data: { tradeInfo }
    });
}