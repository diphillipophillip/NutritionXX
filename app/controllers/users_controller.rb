
require 'pry'

class UsersController < ApplicationController



    def create 
        @user = User.create(email: params[:email], username: params[:username], password: params[:password])
        
        if @user.valid? 
            render json: @user
        else 
            render json: {errors: @user.errors}
        end 
       
    end 

    def login 

        email = params[:email]
        password = params[:password]
        @user = User.find_by_email(email)
            if @user && @user.authenticate(password)
                render json: @user
            else 
                render json: {errors: "The Email or Password you entered was incorrect"}
            end 
    end 


end
