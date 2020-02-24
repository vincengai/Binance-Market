class Coin < ApplicationRecord
    validates :name, :symbol, presence: true
    validates :symbol, uniqueness: true
    has_many :watchlists
    has_many :transactions
    has_many :watchlists 

    def self.fetch_current_news()
        url = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN'
        response = Faraday.get url
        values = JSON.parse(response.body)
    end


    # Convert Frontend API Calls to the Backend
    # def self.fetch_current_value(symbols)
    #     url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms='
    #     syms = symbols.join(',').concat('&tsyms=USD&api_key=')
    #     api_key = Rails.application.credentials.cryptocompare[:api_key]
    #     response = Faraday.get url+syms+api_key
    #     values = JSON.parse(response.body)
    #     # https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=INSERT-YOUR-API-KEY-HERE
    # end

    # def self.fetch_crypto_detail(symbol)
    #     # url = "https://min-api.cryptocompare.com/data/generateAvg?fsym=#{symbol}&tsym=USD&e=Kraken"
    #     url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=#{symbol}&tsyms=USD"
    #     response = Faraday.get url
    #     values = JSON.parse(response.body)
    # end

    # def self.fetch_historical_value(symbol)
    #     url = "https://min-api.cryptocompare.com/data/v2/histoday?fsym=#{symbol}&tsym=USD&limit=90"
    #     response = Faraday.get url
    #     values = JSON.parse(response.body)
    # end

end
