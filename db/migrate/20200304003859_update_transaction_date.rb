class UpdateTransactionDate < ActiveRecord::Migration[5.2]
  def change
    add_column :wallet_transactions, :transaction_date, :datetime

  end
end
