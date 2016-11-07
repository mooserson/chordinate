class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    if @like.save
      render status: 200
    else
      render json: @like.errors, status: 422
    end
  end

  def destroy
    @like = Like.find_by_credentials(user_id, song_id)
    if @like
      @like.delete
    else
      render json: "Like not found", status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :song_id)
  end

end
