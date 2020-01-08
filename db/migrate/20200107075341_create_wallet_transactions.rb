class CreateWalletTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :wallet_transactions do |t|
      t.integer :wallet_id, null: false 
      t.integer :user_id, null: false 
      t.string :wallet_address, null: false 
      t.string :type, null: false 
      t.integer :quantity, null: false 
      t.float :price, null: false 
      t.timestamps
    end

    add_index :wallet_transactions, :wallet_id
    add_index :wallet_transactions, :user_id
    
  end
end
