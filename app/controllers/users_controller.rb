
require 'pry'

class UsersController < ApplicationController



    def create 
        @user = User.create(email: params[:email], username: params[:username], password: params[:password])
        all = User.all
        if @user.valid? 
            render json: @user
        else 
            render json: @user.errors 
        end 
    end 


end
