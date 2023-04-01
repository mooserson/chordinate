# 32923_getting_it_running ✗ be rake routes
#      Prefix Verb   URI Pattern              Controller#Action
#        root GET    /                        static_pages#root
#    api_user GET    /api/user(.:format)      api/users#show {:format=>:json}
#             POST   /api/user(.:format)      api/users#create {:format=>:json}
# api_session DELETE /api/session(.:format)   api/sessions#destroy {:format=>:json}
#             POST   /api/session(.:format)   api/sessions#create {:format=>:json}
#   api_songs GET    /api/songs(.:format)     api/songs#index {:format=>:json}
#             POST   /api/songs(.:format)     api/songs#create {:format=>:json}
#    api_song GET    /api/songs/:id(.:format) api/songs#show {:format=>:json}
#             PATCH  /api/songs/:id(.:format) api/songs#update {:format=>:json}
#             PUT    /api/songs/:id(.:format) api/songs#update {:format=>:json}
#             DELETE /api/songs/:id(.:format) api/songs#destroy {:format=>:json}
#    api_like DELETE /api/like(.:format)      api/likes#destroy {:format=>:json}
#             POST   /api/like(.:format)      api/likes#create {:format=>:json}
#   api_plays POST   /api/plays(.:format)     api/plays#create {:format=>:json}

Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:create, :show, :update, :destroy, :index]
    resource :like, only: [:create, :destroy]
    resources :plays, only: [:create]
  end
end
