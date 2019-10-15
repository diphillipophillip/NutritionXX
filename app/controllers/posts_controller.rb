class PostsController < ApplicationController


    def create 
        user_id = params[:user_id]
        @user = User.find_by_id(user_id)
        @post = Post.create(post: params[:post])
        @user.posts << @post 
        
        render json: @post
        binding.pry
    end 


end
