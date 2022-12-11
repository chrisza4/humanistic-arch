Rails.application.routes.draw do
  resources :budgets
  resources :users
  resources :purchases
  resources :approvals
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
