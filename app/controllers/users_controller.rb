
require 'pry'

class UsersController < ApplicationController



    def create 
        @user = User.create(email: params[:email], username: params[:username], password: params[:password])
        
        if @user.valid? 
            render json: @user
        else 
            render json: {errors: @user.errors}
        end 
        binding.pry
    end 


end
