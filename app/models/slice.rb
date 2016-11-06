class Slice < ApplicationRecord
  validates :song_id, :timeslice, presence: true

  belongs_to :song
end
