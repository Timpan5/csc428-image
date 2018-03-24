class ImageCategorizationController < ApplicationController
  layout "image_categorization"

  def index
    @image_categorization_props = { dev_environment: Rails.env.development? }
  end
end
