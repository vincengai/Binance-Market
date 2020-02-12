class NeedSymbolCol < ActiveRecord::Migration[5.2]
  def change
    add_column :wallets, :symbol, :string
  end
end
