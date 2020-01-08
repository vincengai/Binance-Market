class CreateWatchLists < ActiveRecord::Migration[5.2]
  def change
    create_table :watch_lists do |t|
      t.integer :user_id, null: false
      t.integer :coin_id, null: false 
      t.timestamps
    end

    add_index :watch_lists, :user_id
    add_index :watch_lists, :coin_id
    add_index :watch_lists, [:coin_id, :user_id], unique: true
  end
end
