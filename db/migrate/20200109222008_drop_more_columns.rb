class DropMoreColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :coins, :lowest_price
    remove_column :coins, :closing_price
    remove_column :coins, :volume
  end
end
