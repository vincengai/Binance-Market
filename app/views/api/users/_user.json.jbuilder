json.extract! user, :id, :username
json.favorite_benches user.watch_lists.coin_id.pluck(:id)
