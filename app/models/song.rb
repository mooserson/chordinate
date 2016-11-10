class Song < ApplicationRecord
  validates :title, :user_id, presence: true

  belongs_to :user
  has_many :slices
  has_many :likes
  has_many :likers, through: :likes, source: :user
  has_many :plays
  scope :popular_4, -> {
    select('songs.*, COUNT(likes.song_id) AS likes_count')
      .joins(:likes)
      .group('songs.id')
      .order('likes_count DESC')
      .take(4)
  }
  scope :played_4, -> {
    select('songs.*, COUNT(plays.song_id) AS plays_count')
      .joins(:plays)
      .group('songs.id')
      .order('plays_count DESC')
      .take(4)
  }
end
