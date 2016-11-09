class Api::PlaysController < ApplicationController

  def create
    @play = Play.new(user_id: current_user.id, song_id: play_params[:song_id])
    if @play.save
      render json: ["Play Added"]
    else
      render json: @play.errors, status: 422
    end
  end

  private

  def play_params
    params.require(:play).permit(:song_id)
  end

end
