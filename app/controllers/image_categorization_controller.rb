class ImageCategorizationController < ApplicationController
  layout "image_categorization"

  def index
    @image_categorization_props = { name: "Stranger" }
  end
end
