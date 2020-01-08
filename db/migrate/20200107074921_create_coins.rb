class CreateCoins < ActiveRecord::Migration[5.2]
  def change
    create_table :coins do |t|
      t.string :name, null: false
      t.string :symbol, null: false 
      t.float :opening_price, null: false
      t.float :lowest_price, null: false 
      t.float :highest_price, null: false 
      t.float :closing_price, null: false
      t.integer :volume, null: false
      t.timestamps
    end
  end
end
