Rails.application.routes.draw do
  root to: "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do

    #This is Rails shortcut. instead of putting POST 'api/users', to: "users#CREATE" you can do this
    resources :users, only: [:create]

    # POST api/session ( to log in)
    # DELETE api/session ( to log out)
    resource :session, only: [:create, :destroy]

    # GET api/coins ( list of all coin ) if backend API 
    # GET api/coin/:id ( Grab coin information)
    resources :coins, only: [:index, :show]

    # POST api/transactions (create a new BUY/SELL transaction & update wallet)
    resources :wallet_transactions, only: [:create]
  end

  #if you want to nest resources, like all comment

  #if you wanted to have an admin privilege you;d put

  #namespace :admin do 
      #resources :transactions, :comments
  #end

  #this is how you'd setup admin routes that allows you to index all trans. and be able to update/patch them
end
