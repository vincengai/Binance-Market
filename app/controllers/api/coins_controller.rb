class Api::CoinController < ApplicationController
    def news 
        @news = Coin.fetch_current_news()
    end 

    def index 
        @coins = Coin.all
    end

    def show
        @coin = Coin.find_by(coin_params)
    end

    private
    def coin_params
        params.require(:coin).permit(:symbol)
    end
end
