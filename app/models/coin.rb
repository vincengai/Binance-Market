class Coin < ApplicationRecord
    validates :name, :symbol, presence: true
    validates :symbol, uniqueness: true


    # belongs_to :wallet,
    # foreign_key: :coin_id,
    # class_name: :Wallet

    # 
    has_many :watchlists


end
