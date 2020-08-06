class Api::WalletTransactionsController < ApplicationController
    def index 
      @transactions = current_user.transactions
    end

    def show
      @transaction = Transaction.find(params[:id])
    end


    def create
      # When the POJO is passed in from the frontend, Key into the POJO to grab
      # The information that needs to be updated
      quantity = transaction_params[:quantity].to_f  # Float, quantity will be Positive or Negative(sell)
      symbol = transaction_params[:symbol]
      price = transaction_params[:price].to_f
      total_price = quantity * price 
      user_id = current_user.id

      # Check if the proper user is logged in 
      correct_user = logged_in? && (user_id == transaction_params[:user_id].to_i)

      if quantity > 0 # Buy Function because quantity given is POSITIVE
        # If there aren't enough funds

        if correct_user && (current_user.cash_balance >= total_price)
          #1) Grab proper wallet w/ methods defined in the Wallet Model
          wallet = Wallet.get_wallet(user_id, symbol)
          
          #BEGINNING MISSIN A END SOMEWHERE
          if wallet == nil 
            Wallet.new(user_id, symbol, name) # figure out the parameters 
            wallet.update_value(quantity)     # update_value quantity of said symbol
          end

          #2) Because we are Buying, change Current_balance)
          current_user.cash_balance = current_user.cash_balance - total_price
          current_user.save
          
          #3) Create a new wallet transaction 
          @wallet_transaction = WalletTransaction.new(
            wallet_id: wallet.id,
            user_id: user.id,
            quantity: quantity,
            price: price, 
            type: "BUY"
          )

          #4) Return the updated User's cash_balance, portfolio, and transactions listing
          @wallet_transaction.save
          
          render json: {
            id: current_user.id,
            email: current_user.email,
            cash_balance: current_user.cash_balance,  # Overal total 
            portfolio: current_user.get_portfolio,  # POJO of coins & their amounts
            transaction: current_user.wallet_transactions  # POJO listing of everything inside the table
          }

        else 
          # Error (not enough funds)
          render json: ["Insufficient Funds to Complete the Transaction"], status: 401
        end

      else quantity < 0 # Negative. you're selling instead of buying...
        
        #Check if the current user even has the coins to sell....
        if current_user && current_user.has_enough_coins(symbol, quantity)
           wallet = Wallet.get_wallet(user_id, symbol)
           wallet.update_value(quantity)

           current_user.cash_balance = current_user.cash_balance + (total_price * -1)
           current_user.save 

        # Because you're selling you will need to create a new Transaction 
          @wallet_transaction = WalletTransaction.new( 
            wallet_id: wallet.id, 
            user_id: current_user.id, 
            price: price,
            quantity: quantity,
            type: 'SELL'
          )

          @wallet_transaction.save

         render json: {
            id: current_user.id,
            email: current_user.email,
            cash_balance: current_user.cash_balance,  # Overal total 
            portfolio: current_user.get_portfolio,  # POJO of coins & their amounts
            transaction: current_user.wallet_transactions  # POJO listing of everything inside the table
          }

        else 
            render json: ["Insufficient Funds to Complete the Transaction"], status: 401
        end
      end  

    
        # If the quantity requested is sub zero 
      if correct_user && (quantity <= 0)
          render json: ["Cryptocurrency must be greater than 0"], status: 422
      end
    end
  

    private
    def transaction_params 
      params.require(:transaction).permit(:user_id, :symbol, :quantity, :price)
    end
end
