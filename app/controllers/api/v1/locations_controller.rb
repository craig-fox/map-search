class Api::V1::LocationsController < Api::V1::BaseController 
  def index 
    respond_with Location.all 
  end 
    
  def create 
    respond_with :api, :v1, Location.create(location_params) 
  end 
  
  def destroy 
    respond_with Location.destroy(params[:id]) 
  end 
  
  def update 
    location = Location.find(params["id"]) 
    location.update_attributes(location_params) 
    respond_with location, json: location 
  end 
  
  private def location_params 
    params.require(:location).permit(:id, :name, :description) 
  end 
  
end
