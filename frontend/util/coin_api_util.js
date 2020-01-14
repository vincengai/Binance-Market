// Using This to get...
//   
//     24H Price Change, 24H % Change
//     24H High, 24H Low
//     24H Volume ( This will be mult. by the USDT value to get 24H volume in terms of USDT )
//     Probable Image_URL

    


// Get all the info for ALL the coins 
export const fetchCoinsInfo = () => {
    // Key: FTC.DISPLAY.<Name_of_Coin>.USD.PRICE
    // debugger
    return $.ajax ({
        url: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,BCH,BNB,LTC,TRX,XRP,XLM,DASH,ONT,NEO,IOTA&tsyms=USD,EUR`,
        method: 'GET'
    })
};

// BTC,ETH,BCH,BNB,LTC,TRX,XRP,XLM,DASH,ONT,NEO,IOTA