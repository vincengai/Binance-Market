class Wallet < ApplicationRecord
    validates :name, :wallet_address, presence: true 
end
