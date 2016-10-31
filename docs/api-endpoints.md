# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

-'POST /api/users'
-'PATCH /api/users'

### Session

-'POST /api/session'
- 'DELETE /api/session'
- 'GET /api/session'

### Songs
- 'GET /api/songs'
  -For songs index, takes param to return n most-recent songs
- 'POST /api/songs'
- 'GET /api/songs/:id/rolls'
  -Gets array of notes objects with notes and timeslices for song
- 'PATCH /api/songs/:id'
- 'DELETE /api/songs/:id'

### Rolls (not sure if all access should be through songs endpoints)
- 'POST /api/rolls'
  -Takes array of note objects
- 'DELETE /api/rolls/:id'
