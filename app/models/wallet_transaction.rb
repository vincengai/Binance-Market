class WalletTransaction < ApplicationRecord
    validates :wallet_id, :user_id, presence: true

    belongs_to :wallet,
    foreign_key: :wallet_id,
    class_name: :Wallet

    belongs_to :user,
    foreign_key: :user_id, 
    class_name: :User 

    
end
