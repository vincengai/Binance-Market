
    
// Get all the info for ALL the coins 
export const fetchCoinsInfo = () => {
    return $.ajax ({
        url: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,BCH,BNB,LTC,TRX,XRP,XLM,DASH,ONT,NEO,IOTA&tsyms=USD,EUR`,
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


// export const fetchNews = (symbol) => {
//     return $.ajax({
//         method: 'GET',
//         url: `https://min-api.cryptocompare.com/data/v2/news/?categories=${symbol}&api_key={1850ecd658611924cea220ccc78bc5e2039b7a992fc2a3ad708300ed180a03dc}`
//     });
// };

