// Using This to get...
//   
//     24H Price Change, 24H % Change
//     24H High, 24H Low
//     24H Volume ( This will be mult. by the USDT value to get 24H volume in terms of USDT )
//     Probable Image_URL


export const fetchBulkInfo = (...symbols) => {
    // FBI.DISPLAY.SYMBOL.<COLUMN_NAME>
    // FBI.RAW FOR RAW INFO
    return $.ajax ({
        url: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbols}&tsyms=USD,EUR`,
        method: "GET"
    })
};
    
export const fetchCurrentPrice = (symbol) => {
    // Key: FTC.DISPLAY.SYMBOL.PRICE
    return $.ajax ({
        url: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbol}&tsyms=USD,EUR`,
        method: "GET"
    })
};

export const fetchCurrentPrices = (...symbols) => {
    // Key: FTC.DISPLAY.<Name_of_Coin>.USD.PRICE
    return $.ajax ({
        url: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbols}&tsyms=USD,EUR`,
        method: 'GET'
    })
};
