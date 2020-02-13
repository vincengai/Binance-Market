class Api::WalletTransactionsController < ApplicationController
    # def index 
    #   @transactions = current_user.transactions
    # end

    def create
      quantity = transaction_params[:quantity].to_f  # Float, quantity will be Positive or Negative(sell)
      symbol = trade_params[:symbol]
      price = trade_params[:price]
      total_price = quantity * price 
      user_id = current_user.id

      # Check if the proper user is logged in 
      correct_user = logged_in? && (user_id == transaction_params[:user_id].to_i)

      if quantity > 0 # Buy Function because quantity given is POSITIVE

        if correct_user && (current_user.cash_balance < total_price)
          render json: ["Not Enough Funds to Complete Transaction"], status: 401
        elsif correct_user && (quantity <= 0)
          render json: ["Cryptocurrency must be greater than 0"], status: 422
        end
      end
    end

    def update 
      if correct_user && (current_user.cash_balance >= total_price)

        wallet = Wallet.get_wallet(user_id, symbol)
    end
    private

    def transaction_params 
      params.require(:transaction).permit(:user_id, :symbol, :quantity, :price)
    end
end
