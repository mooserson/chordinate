class Song < ApplicationRecord
  validates :title, :user_id, presence: true

  belongs_to :user
  has_many :slices
  has_many :likes
end
