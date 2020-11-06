
    
// Get all the info for ALL the coins 
export const fetchCoinsInfo = () => {
    return $.ajax ({
        url: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,BCH,BNB,LTC,TRX,XRP,XLM,DASH&tsyms=USD,EUR`,
        method: 'GET'
    })
};

// Bulk Info meant for the Index Page Table
export const fetchCoinInfo = (symbol) => {
    return $.ajax ({
        url: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbol}&tsyms=USD,EUR`,
        method: 'GET'
    })
}

// Info meant for ReCharts
export const fetch30DayInfo = (symbol) => {
    return $.ajax ({
        url: `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&limit=30`,
        method: 'GET'
    })
}

export const fetchCurrentPrices = (...symbols) => {   // 360 days, daily prices
    return $.ajax({
        method: 'GET',
        url: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbols}&tsyms=USD&api_key={7ad59177d6eecaad1ff76289dedcc3eaab4919b64401df4affc91e8a3be9196f}`
    })
}


export const fetch1DayInfo = (symbol) => {
    return $.ajax ({
        url: `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${symbol}&tsym=GBP&limit=1440`,
        method: 'GET'
    })
}

export const fetch1WeekInfo = (symbol) => {
    return $.ajax ({
        url: `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${symbol}&tsym=USD&limit=168`,
        method: 'GET'
    })
}

export const fetch1MonthInfo = (symbol) => {
    return $.ajax ({
        url: `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&limit=30`,
        method: 'GET'
    })
}

export const fetch1YearInfo = (symbol) => {
    return $.ajax ({
        url: `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&limit=365`,
        method: 'GET'
    })
}

export const fetchCurrentPrice = (symbol) => {
    return $.ajax({
        method: "GET",
        url: `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD`
    });
}

export const fetchNews = (symbol) => {
    return $.ajax({
        url: `https://min-api.cryptocompare.com/data/v2/news/?categories=${symbol}`,
        method: 'GET'
    })
}

export const fetchCurrencyInfo = (symbols) => {   // 360 days, daily prices
    return $.ajax({
        method: 'GET',
        url: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbols}&tsyms=USD&api_key={7ad59177d6eecaad1ff76289dedcc3eaab4919b64401df4affc91e8a3be9196f}`
    })
}

export const fetchHistoricalPrices = (symbol, timeframe, interval) => {        // 1 day, minute prices (1440 minutes)
    return $.ajax({
        method: 'GET',
        url: `https://min-api.cryptocompare.com/data/histo${interval}?fsym=${symbol}&tsym=USD&limit=${timeframe}&api_key={7ad59177d6eecaad1ff76289dedcc3eaab4919b64401df4affc91e8a3be9196f}`
    })
}
