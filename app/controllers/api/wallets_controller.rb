class Api::WalletController < ApplicationController
    validates :user_id, :coin_id, :symbol, :name, presence: true 

    belongs_to :user, 
    foreign_key: :user_id,
    class_name: :User

    has_many :coins, 
    foreign_key: :coin_id,
    class_name: :Coin

    
end
