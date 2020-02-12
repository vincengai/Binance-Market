class DropTransactionCol < ActiveRecord::Migration[5.2]
  def change
    remove_column :wallet_transactions, :wallet_id
    remove_column :wallet_transactions, :wallet_address
    remove_column :wallet_transactions, :quantity

    add_column :wallet_transactions, :units, :integer 
  end
end
