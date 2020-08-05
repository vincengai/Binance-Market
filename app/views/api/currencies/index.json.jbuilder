json.cryptocurrencies do                        # creates top level key called "cryptocurrencies"
    @currencies.each do |currency|
        json.set! currency.id do 
            json.extract! currency, :id, :symbol, :name 
        end
    end
end

# cryptocurrencies: {
#     1: {
#         id: 1,
#         symbol: 'BTC',
#         name: 'BITCOIN',
#         market_cap: 179920162901,     # will fetch through outside api
#         currentPrice: 0.312,          # will fetch through outside api
#         changePct24HR: 4.1,           # will fetch through outside api
#         volume: 1.1                   // 24hr volume in billions
#         circulating_supply: 17836800  # will fetch through outside api
#     },
#     2: {
#         id: 2,
#         symbol: 'XRP',
#         name: 'XRAPID',
#         market_cap: 13655743268,
#         currentPrice: 0.312,
#         changePct24HR: 4.1,
#         volume: 1.1            // 24hr volume in billions
#         circulating_supply: 99999999999
#     }
# }