class Api::SongsController < ApplicationController

  def create
    @song = Song.new(song_params)
    debugger;
    if @song.save
    end
  end

  private

  def song_params
    params.require(:song).permit(:title, :user_id)
  end

  # def slice_params
  #   params.require(:song).permit()
  # end
end
