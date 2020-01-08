class CreateWallets < ActiveRecord::Migration[5.2]
  def change
    create_table :wallets do |t|
      t.string :symbol, null: false
      t.string :name, null: false 
      t.integer :user_id, null: false 
      t.string :wallet_address, null: false 
      t.timestamps
    end
    add_index :wallets, :user_id
  end
end
