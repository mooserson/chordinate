class Slice < ApplicationRecord
  validates :song_id, :time_slice, presence: true
  belongs_to :song
end
