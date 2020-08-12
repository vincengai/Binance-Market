class User < ApplicationRecord

  attr_reader :password


  validates :username, :session_token, uniqueness: true, presence: true 
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  after_create :generate_wallets


  has_many :wallets,
    foreign_key: :user_id,
    class_name: :Wallet
    
  has_many :wallet_transactions

  has_many :watch_lists,
   foreign_key: :coin_id, 
   class_name: :Coin
    


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  # Wallet Porfotlio Etc. 

  def generate_wallets
      currencies = [
        'BTC', 'ETH', 'BCH', 'BNB', 'LTC', 'TRX', 'XRP',
        'XLM', 'DASH', 'ONT', 'NEO']

        currencies.each do |symbol|
          Wallet.create(
            :currency_symbol => symbol,
            :user_id => self.id,
            :total_value => 0.00,
            :wallet_address => SecureRandom.hex(16)
          )
        end
  end

  def shares_owned(coin_id) 
    transactions.where(coin_id: coin_id).reduce(0) do |shares, transaction|
      if transaction.type == 'buy'
        shares + transaction.quantity
      else
        shares - transaction.quantity
      end
    end
  end


  # def calculate_buying_power 

  # end

  def get_portfolio
      # Get all wallets for Current User , Returns an Array of Obj. 
      wallets = Wallet.where(user_id: self.id)  # Returns [ { id: 1, symbol: 'BTC', 'total_value': 1}, ]

      portfolio = {}

      # Iterate thru all the wallets(symbol), and initialize a new Key if the value is > 0
      wallets.each_with_index do |ele, i|
        wallet = wallets[i]
        symbol = wallet.currency_symbol

        if wallet.total_value > 0
          portfolio[symbol] = wallet.total_value
        end
      end

    return portfolio
  end

  #Returns array of wallets that belong to user 
  def get_wallets
    Wallet.where(user_id: self.id)
  end

  # Purpose of selling, therefore Quantity Will be NEGATIVE. 
  def has_enough_coins(symbol, quantity) 
    portfolio = self.get_portfolio

    # Because quantity comes in as a NEGATIVE number
    quantity = quantity * -1 

    # Check if the quantity provided does not succeed Quantity in Portfolio Wallet 
    if ( (portfolio[currency_symbol] == nil) or (portfolio[currency_symbol] < quantity))
        return false 
    end
    
    return true   
  end




  
  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
