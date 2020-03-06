class Api::WalletTransactionsController < ApplicationController
    def index 
      @transactions = current_user.transactions
    end

    def show
      @transaction = Transaction.find(params[:id])
    end

    def create
      # When the POJO is passed in from the frontend, Key into the POJO to grab
      # THe information that needs to be updated
      # quantity = transaction_params[:quantity].to_f  # Float, quantity will be Positive or Negative(sell)
      # symbol = transaction_params[:symbol]
      # price = transaction_params[:price]
      # total_price = quantity * price 
      # user_id = current_user.id

      @transaction = Transaction.new(transaction_params)
      @coin = Coin.find_by(symbol: params[:transaction][:symbol])
      @transaction.coin_id = @coin.id
      @transaction.user_id = current_user.id
      @transaction.transaction_date = Time.now

      transaction_amount = @transaction.price * @transaction.quantity
      shares_owned = current_user.shared_owned(@transaction.coin_id)

      # if transaction_amount > current_user.calculate_buying_power

      # end

    end


    #   # Check if the proper user is logged in 
    #   correct_user = logged_in? && (user_id == transaction_params[:user_id].to_i)

    #   if quantity > 0 # Buy Function because quantity given is POSITIVE
    #     # If there aren't enough funds

    #     if correct_user && (current_user.cash_balance >= total_price)
    #       #1) Grab proper wallet w/ methods defined in the Wallet Model
    #       wallet = Wallet.get_wallet(user_id, symbol)
    #       wallet.update_value(quantity)

    #       #2) Because we are Buying, change Current_balance)
    #       current_user.cash_balance = current_user.cash_balance - total_price
    #       current_user.save
          
    #       #3) Create a new wallet transaction 
    #       @wallet_transaction = WalletTransaction.new(
    #         wallet_id: wallet.id,
    #         user_id: user.id,
    #         quantity: quantity,
    #         price: price, 
    #         type: "BUY"
    #       )

    #       #4) Return the updated User's cash_balance, portfolio, and transactions listing
    #       @wallet_transaction_save

    #       render json: {
    #         id: currend_user.id,
    #         email: email,
    #         cash_balance: cash_balance,  # Overal total 
    #         portfolio: current_user.get_portfolio,  # POJO of coins & their amounts
    #         transaction: currend_user.wallet_transactions  # POJO listing of everything inside the table
    #       }

    #     else 
    #       # IF you can't buy, (not enough funds)
    #       render json: ["Insufficient Funds to Complete the Transaction"], status: 401
    #     end

    #   else quantity < 0 # AKA you're selling instead of buying...
        
    #     #Check if the current user even has the coins to sell....
    #     if current_user && current_user.has_enough_coins(symbol, quantity)
    #        wallet = Wallet.get_wallet(user_id, symbol)
    #        wallet.update_value(quantity)

    #        current_user.cash_balance = current_user.cash_balance + total_price
    #        current_user.save 

    #     # Because you're selling you will need to create a new Transaction 
    #       @wallet_transaction = WalletTransaction.new( 
    #         user_id: user_id, 
    #         wallet_id: wallet_id, 
    #         type: 'SELL',
    #         price: price,
    #         quantity: quantity
    #       )

    #       @wallet_transaction.save

    #      render json: {
    #         id: currend_user.id,
    #         email: email,
    #         cash_balance: cash_balance,  # Overal total 
    #         portfolio: current_user.get_portfolio,  # POJO of coins & their amounts
    #         transaction: currend_user.wallet_transactions  # POJO listing of everything inside the table
    #       }

    #     else 
    #         render json: ["Insufficient Funds to Complete the Transaction"], status: 401
    #     end
    #   end  

    #     # If the quantity requested is sub zero 
    #   if correct_user && (quantity <= 0)
    #       render json: ["Cryptocurrency must be greater than 0"], status: 422
    #   end
    # end

    private
    def transaction_params 
      params.require(:transaction).permit(:user_id, :symbol, :quantity, :price)
    end
end
