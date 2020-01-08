class User < ApplicationRecord

  attr_reader :password


  validates :email, :username, :session_token, uniqeness: true, presence: true 
  validates :password_digest, :first_name, :last_name, presence: true
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
