Rails.application.routes.draw do
  root "image_categorization#index"
  get 'image_categorization', to: 'image_categorization#index'
end
