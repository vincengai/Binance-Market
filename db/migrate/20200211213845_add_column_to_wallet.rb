class AddColumnToWallet < ActiveRecord::Migration[5.2]
  def change
        add_column :wallets, :total_value, :integer
  end
end
