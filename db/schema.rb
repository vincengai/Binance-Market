# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_12_225005) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "coins", force: :cascade do |t|
    t.string "name", null: false
    t.string "symbol", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username", null: false
    t.float "cash_balance", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "wallet_transactions", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "type", null: false
    t.float "price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "coin_id"
    t.integer "wallet_id"
    t.integer "quantity"
    t.index ["user_id"], name: "index_wallet_transactions_on_user_id"
  end

  create_table "wallets", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "wallet_address"
    t.float "total_value"
    t.string "symbol"
    t.index ["user_id"], name: "index_wallets_on_user_id"
  end

  create_table "watch_lists", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "coin_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["coin_id", "user_id"], name: "index_watch_lists_on_coin_id_and_user_id", unique: true
    t.index ["coin_id"], name: "index_watch_lists_on_coin_id"
    t.index ["user_id"], name: "index_watch_lists_on_user_id"
  end

end
