class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid User Credentials"], status: 422
    end
  end

  def destroy
    unless !!current_user
      render json: "Not logged in!", status: 404
      return
    end
    logout
    render json: {}
  end

end
