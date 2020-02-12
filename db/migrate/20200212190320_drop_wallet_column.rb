class DropWalletColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :wallets, :symbol, :name, :total_value
    add_column :wallets, :units, :integer
  end
end
