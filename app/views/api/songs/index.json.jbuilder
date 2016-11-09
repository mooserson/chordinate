json.array! @songs do |song|
  json.partial! '/api/songs/song_info', song: song
end
