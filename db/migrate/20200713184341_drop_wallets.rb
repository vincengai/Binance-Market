class DropWallets < ActiveRecord::Migration[5.2]
  def change
    remove_column :wallets, :symbol

    add_column :wallets, :currency_symbol, :string
  end
end
