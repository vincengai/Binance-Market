class AddWalletColumn < ActiveRecord::Migration[5.2]
  def change
        add_column :wallets, :coin_id, :integer
  end
end
