class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    if @like.save
      render json: true
    else
      render json: @like.errors, status: 422
    end
  end

  def destroy
    @like = Like.find_by_credentials(
      like_params[:user_id],
      like_params[:song_id]
    )
    if @like
      @like.delete
      render json: false
    else
      render json: "Like not found", status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :song_id)
  end

end
