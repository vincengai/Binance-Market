class AddCoinId < ActiveRecord::Migration[5.2]
  def change
    add_column :wallet_transactions, :coin_id, :integer 

  end
end
