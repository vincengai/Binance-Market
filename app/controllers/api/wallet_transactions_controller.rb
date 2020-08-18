# class Api::WalletTransactionsController < ApplicationController
#     def index 
#       @transactions = current_user.transactions
#     end

#     def show
#       @transaction = Transaction.find(params[:id])
#     end

#     #heroku
#     def create
#       # When the POJO is passed in from the frontend, Key into the POJO to grab
#       # The information that needs to be updated
#       quantity = transaction_params[:quantity].to_f  # Float, quantity will be Positive or Negative(sell)
#       symbol = transaction_params[:symbol]
#       price = transaction_params[:price].to_f
#       total_price = quantity * price 
#       user_id = current_user.id

#       # Check if the proper user is logged in 
#       correct_user = logged_in? && (user_id == transaction_params[:user_id].to_i)

#       if quantity > 0 # Buy Function because quantity given is POSITIVE
#         # If there aren't enough funds

#         if correct_user && (current_user.cash_balance >= total_price)
#           #1) Grab proper wallet w/ methods defined in the Wallet Model
#           wallet = Wallet.get_wallet(user_id, symbol)
          
#           #BEGINNING MISSIN A END SOMEWHERE
#           # if wallet == nil 
#           #   Wallet.new(user_id, symbol, name) # figure out the parameters    // LOOK UP NAME
#           #   wallet.update_value(quantity)     # update_value quantity of said symbol
#           # end

#           #2) Because we are Buying, change Current_balance)
#           current_user.cash_balance = current_user.cash_balance - total_price
#           current_user.save
          
#           #3) Create a new wallet transaction 
#           @wallet_transaction = WalletTransaction.new(
#             wallet_id: wallet.id,
#             user_id: user.id,
#             quantity: quantity,
#             price: price, 
#             type: "BUY"
#           )

#           #4) Return the updated User's cash_balance, portfolio, and transactions listing
#           @wallet_transaction.save
          
#           render json: {
#             id: current_user.id,
#             email: current_user.email,
#             cash_balance: current_user.cash_balance,  # Overal total 
#             portfolio: current_user.get_portfolio,  # POJO of coins & their amounts
#             transaction: current_user.wallet_transactions  # POJO listing of everything inside the table
#           }

#         else 
#           # Error (not enough funds)
#           render json: ["Insufficient Funds to Complete the Transaction"], status: 401
#         end

#       else quantity < 0 # Negative. you're selling instead of buying...
        
#         #Check if the current user even has the coins to sell....
#         if current_user && current_user.has_enough_coins(symbol, quantity)
#            wallet = Wallet.get_wallet(user_id, symbol)
#            wallet.update_value(quantity)

#            current_user.cash_balance = current_user.cash_balance + (total_price * -1)
#            current_user.save 

#         # Because you're selling you will need to create a new Transaction 
#           @wallet_transaction = WalletTransaction.new( 
#             wallet_id: wallet.id, 
#             user_id: current_user.id, 
#             price: price,
#             quantity: quantity,
#             type: 'SELL'
#           )

#           @wallet_transaction.save

#          render json: {
#             id: current_user.id,
#             email: current_user.email,
#             cash_balance: current_user.cash_balance,  # Overal total 
#             portfolio: current_user.get_portfolio,  # POJO of coins & their amounts
#             transaction: current_user.wallet_transactions  # POJO listing of everything inside the table
#           }

#         else 
#             render json: ["Insufficient Funds to Complete the Transaction"], status: 401
#         end
#       end  

    
#         # If the quantity requested is sub zero 
#       if correct_user && (quantity <= 0)
#           render json: ["Cryptocurrency must be greater than 0"], status: 422
#       end
#     end
  

#     private
#     def transaction_params 
#       params.require(:transaction).permit(:user_id, :symbol, :quantity, :price)
#     end
# end


class Api::WalletTransactionsController < ApplicationController
  def create                                  # create new wallet transaction AND update wallet value
    # Calculate total purchase price
    quantity = trade_params[:quantity].to_f   # float   - will be negative if sell, positive for buy
    symbol = trade_params[:symbol]            # string
    price = trade_params[:price].to_f         # float
    total_price = quantity * price            # float   - will be negative if sell
    user_id = current_user.id                 # integer

    # Make sure correct user is logged in 
    # Check if user_id matches user_id in DB by session cookie 
    correct_user = logged_in? && (user_id == trade_params[:user_id].to_i)

    if quantity > 0   # BUY
      # Validate user has enough cash
      if correct_user && (current_user.cash_balance >= total_price)
  
        # 1) Update correct wallet value
        wallet = Wallet.get_wallet(user_id, symbol)
        wallet.update_value(quantity)
        p wallet
        # decrease cash balance by total price
        current_user.cash_balance = current_user.cash_balance - total_price
        current_user.save
        # debugger

        # 2) Create new wallet transaction
        @wallet_transaction = WalletTransaction.new(
          wallet_id: wallet.id,
          user_id: current_user.id,
          quantity: quantity,
          price: price,
          transaction_type: 'BUY'
        )
        
        # 3) Send back users new cash_balance, portfolio, (transactions but add this later)
        @wallet_transaction.save
        # debugger
    
        render json: {
          currentUser_id: current_user.id,
          email: current_user.email,
          cash_balance: current_user.cash_balance,            # float
          portfolio: current_user.get_portfolio,              # object { 'BTC': 1, 'LTC': .5 } 
          transactions: current_user.wallet_transactions      # [ {quantity:1, price:8143, currency_symbol:'BTC', created_at:... }, {}, ...]
        }
      else
        # Send back error
        render json: ['Not enough cash balance, and/or invalid params'], status: 422
      end
    else # QUANTITY <= 0 WHICH MEANS SELL
      # debugger

      # Validate user has enough currency to sell
      if correct_user && current_user.has_enough_currency(symbol, quantity)
        # debugger

        # Update correct wallet value
        wallet = Wallet.get_wallet(user_id, symbol)
        wallet.update_value(quantity)                     # quantity is negative

        # Increase cash balance by total price
        current_user.cash_balance = current_user.cash_balance + (total_price * -1)
        current_user.save
        # debugger

        # Create new wallet transaction
        @wallet_transaction = WalletTransaction.new(
          wallet_id: wallet.id,
          user_id: current_user.id,
          quantity: quantity,                                 # negative
          price: price,
          transaction_type: 'SELL'
        )
        
        # 3) Send back users new cash_balance, portfolio, (transactions but add this later)
        @wallet_transaction.save
        # debugger
        
        render json: {
          currentUser_id: current_user.id,
          email: current_user.email,
          cash_balance: current_user.cash_balance,            # float
          portfolio: current_user.get_portfolio,              # object { 'BTC': 1, 'LTC': .5 } 
          transactions: current_user.wallet_transactions      # [ {quantity:1, price:8143, currency_symbol:'BTC', created_at:... }, {}, ...]
        }
      else  # user does not have enough to sell
        render json: ['Not enough currency to sell, and/or invalid params'], status: 422
      end
    end

  end


  private
  def trade_params
    # ex. params == {"tradeInfo"=>{"user_id"=>"11", "symbol"=>"BTC", "quantity"=>"1"}
    params.require(:transaction).permit(:user_id, :symbol, :quantity, :price)
  end
end
