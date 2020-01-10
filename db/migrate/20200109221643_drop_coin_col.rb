class DropCoinCol < ActiveRecord::Migration[5.2]
  def change
    remove_column :coins, :opening_price, :lowest_price
    remove_column :coins, :highest_price, :closing_price, :volume
  end
end
