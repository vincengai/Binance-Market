class DropWalletColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :wallets, :name, :wallet_address, :total_value

  end
end
