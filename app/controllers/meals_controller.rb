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
        if newData['food_names'].length > 1 
           name = newData['food_names'].join(' and ')
        else 
            name = newData['food_names'][0]
        end 
        
        @meal = Meal.create(name: name, date: newData['date'], total_calories: newData['nf_calories'], calories_from_fat: newData['nf_total_fat'] * 9, total_fat: newData['nf_total_fat'], saturated_fat: newData['nf_saturated_fat'], cholesterol: newData['nf_cholesterol'], sodium: newData['nf_sodium'], potassium: newData['nf_potassium'], total_carbohydrates: newData['nf_total_carbohydrate'], dietary_fiber: newData['nf_dietary_fiber'], sugar: newData['nf_sugars'], protein: newData['nf_protein'] )

        @user_id = newData['user_id']
        @user = User.find_by_id(@user_id)
        @user.meals << @meal

        render json: @meal
    
    end 

    def all 

        @user_id = params[:user_id]
        @user = User.find_by_id(@user_id)
        render json: @user.meals 


    end 


    def show 

        @id = params[:id]
        @meal = Meal.find_by_id(@id)
        render json: @meal
        

    end 

end 
