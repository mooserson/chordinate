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

  def index
    case params[:type]
    when 'new'
      @songs = Song.order(:created_at).last(4)
    when 'popular'
      @songs = Song.popular_4
    when 'played'
      @songs = Song.played_4
    when 'query'
      @songs = Song.where("title ILIKE ?", "%#{params[:query]}%").order(:title)
    when 'user'
      user_id = User.find_by_username(params[:user]).id
      @songs = Song.where("user_id = ?", user_id.to_s).order(:title)
      if @songs.empty?
        render json: "No songs available", status: 404
        return
      end
    end
    render :index
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
    JSON.parse(params[:slices]).reverse.each do |slice|
      @slice = Slice.new(
        notes: (slice['notes'].join if slice['notes']),
        time_slice: slice['timeSlice'],
        song_id: song_id
      )
      render json: ["Invalid slice"] unless @slice.save
    end
  end
end
