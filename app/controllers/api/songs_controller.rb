class Api::SongsController < ApplicationController

  def create
    @song = Song.new(
      title: params[:title],
      user_id: params[:user_id]
    )
    if @song.save
      save_slices(@song.id)
      render :show
    else
      render json: ["Invalid song!"]
    end
  end

  def show
    @song = Song.find(params[:id])
    if @song
      render :show
    else
      render json: ["Invalid song id!"]
    end
  end

  def destroy
    @song = Song.find(params[:id])
    if @song
      @song.delete
      render json: ["Success!"]
    else
      render json: ["Invalid song id!"], status: 404
    end
  end

  private
  def save_slices(song_id)
    JSON.parse(params[:slices]).each do |slice|
      @slice = Slice.new(
        notes: (slice['notes'].join if slice['notes']),
        time_slice: slice['timeSlice'],
        song_id: song_id
      )
      render json: ["Invalid slice"] unless @slice.save
    end
  end
end
