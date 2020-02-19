class WatchList < ApplicationRecord
    validates :user_id, :coin_id, presence: true 
    validates :coin_id, uniqueness { scope: :user_id }
    message: "User already has this coin in their watchlist"}

    belongs_to :user,
    foreign_key: :user_id, 
    class_name: :User

    belongs_to :coin,
    foreign_key: :coin_id, 
    class_name: :Coin
end
