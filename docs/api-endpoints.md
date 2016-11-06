# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- 'POST /api/users'
- 'PATCH /api/users'

### Session

- 'POST /api/session'
- 'DELETE /api/session'
- 'GET /api/session'

### Songs
- 'GET /api/songs'
  - For songs index, takes param to return n most-recent songs,
  includes song likes and song plays
- 'POST /api/songs'
  - Creates new song and saves all song slices to the db
- 'GET /api/songs/:id/'
  - Gets array of notes objects with notes and timeslices for song
- 'PATCH /api/songs/:id'
- 'DELETE /api/songs/:id'
