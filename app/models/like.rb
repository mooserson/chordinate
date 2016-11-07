class Like < ApplicationRecord
  validates :user_id, :song_id, presence: true

  belongs_to :song
  belongs_to :user

  def self.find_by_credentials(user_id, song_id)
    @like = Like.where(user_id: user_id).where(song_id: song_id).first
    return nil unless @like
    @like
  end
end
