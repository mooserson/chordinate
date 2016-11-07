Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:create, :show, :update, :destroy, :index]
    resources :likes, only: [:create, :destroy]
  end
end
