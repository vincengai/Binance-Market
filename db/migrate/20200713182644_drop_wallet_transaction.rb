class DropWalletTransaction < ActiveRecord::Migration[5.2]
  def change
      remove_column :wallet_transactions, :type
      remove_column :wallet_transactions, :coin_id
      add_column :wallet_transactions, :transaction_type, :string


  end
end
