class PostsController < ApplicationController


    def create 
        
        user_id = params[:user_id]
        @user = User.find(user_id)
        @post = Post.create(post: params[:post])
        @user.posts << @post
        @posts = Post.all
        render json: @posts
       
    end 

    def index 

        @posts = Post.all 
        render json: @posts
        
    end 



end
