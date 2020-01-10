class Coin < ApplicationRecord
    validates :name, :symbol, presence: true

    belongs_to :wallet,
    foreign_key: :coin_id,
    class_name: :Wallet


    def 

    end
    

end
