json.set! :id, song.id
json.set! :user, song.user.username
json.set! :title, song.title
json.set! :date, song.created_at
json.set! :liked, !!Like.find_by_credentials(current_user.id, song.id)
json.set! :likes, song.likes.count
