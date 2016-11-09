class Song < ApplicationRecord
  validates :title, :user_id, presence: true

  belongs_to :user
  has_many :slices
  has_many :likes
  scope :popular_4, -> {
    select('songs.*, COUNT(likes.song_id) AS likes_count')
      .joins(:likes)
      .group('songs.id')
      .order('likes_count DESC')
      .take(4)
  }
end
