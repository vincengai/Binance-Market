class WalletTransaction < ApplicationRecord
    validates :wallet_id, :user_id, presence: true
    validates :transaction_type, includsion: {in: ['buy', 'sell']}

    belongs_to :coin,

    belongs_to :user,

    
end
