require 'pry'
require 'json'

require 'uri'




class MealsController < ApplicationController


    def search
        input = params[:input]

        body = {
            "query": input,
            "locale": "en_US"
        }

         resp = Faraday.post("https://trackapi.nutritionix.com/v2/natural/nutrients") do |req| 
            req.headers["x-app-id"] = ENV['X_APP_ID']
            req.headers["x-app-key"] = ENV['X_APP_KEY']
            req.headers['x-remote-user-id'] = ENV['X_REMOTE_USER_ID']
            req.headers['Content-Type'] = 'application/json'
            req.headers['Accept'] = 'application/json'

            req.body = body.to_json
        end 

        response = JSON.parse(resp.body)
        render json: response
        
    end 

    def save 
        data = params[:data]
        newData = JSON.parse(data)
        binding.pry

    end 
  
end 
