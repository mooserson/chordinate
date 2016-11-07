json.set! :id, @song.id
json.set! :user, @song.user.username
json.set! :title, @song.title
json.set! :date, @song.created_at
json.set! :liked, !!Like.find_by_credentials(current_user.id, @song.id)
json.set! :likes, @song.likes.count
json.set! :slices do
  json.array! @song.slices do |slice|
    json.notes slice.notes.split("")
    json.timeSlice slice.time_slice
  end
end
