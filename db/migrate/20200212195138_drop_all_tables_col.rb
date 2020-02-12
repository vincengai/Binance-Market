class DropAllTablesCol < ActiveRecord::Migration[5.2]
  def change
    remove_column :wallet_transactions, :units
    add_column :wallet_transactions, :wallet_id, :integer
    add_column :wallet_transactions, :quantity, :integer 

    remove_column :wallets, :coin_id
    remove_column :wallets, :units
    add_column :wallets, :wallet_address, :string
    add_column :wallets, :total_value, :float 
  end
end
