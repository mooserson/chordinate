class Like < ApplicationRecord
  validates :user_id, :song_id, presence: true

  belongs_to :song
  belongs_to :user

  def self.find_by_credentials(user_id, song_id)
    @like = User.find_by_user_id(user_id)
    return nil unless @like && @like.song == song_id
    @like
  end
end
