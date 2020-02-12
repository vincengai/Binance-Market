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


end
