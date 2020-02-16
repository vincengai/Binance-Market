Rails.application.routes.draw do
  get 'wallet/transactions'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    # POST api/user (create user)
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
  root to: "static_pages#root"
end
