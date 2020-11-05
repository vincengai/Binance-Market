class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.cash_balance = 1000000

    if @user.save
      login(@user)
      render json:@user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
