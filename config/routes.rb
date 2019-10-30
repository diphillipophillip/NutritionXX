Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/register', to: 'users#create'
  get '/login', to: 'users#login'
  get '/addpost', to: 'posts#create'
  get '/posts', to: 'posts#index'
  get '/searchmeal', to: 'meals#search'
  get '/findcalories', to: 'calories#search'
  get '/save', to: 'meals#save'
  get '/all', to: 'meals#all'
  
end
