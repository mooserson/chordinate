json.set! :id, @song.id
json.set! :user, @song.user.username
json.set! :title, @song.title
json.set! :date, @song.created_at
