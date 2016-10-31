# Chordinate README


[Heroku link]
[Trello link][trello]

[trello]: https://trello.com/b/lXHl7GZQ/chordinate

## Minimum Viable Product

Chordinate is a web-application that offers a light-weight instrument to encourage musical creativity and social play.
It is built on React/Redux front-end with Ruby on Rails back-end. The app will demonstrate professional styling, smooth, bug-free navigation and demonstrative seed data within following features (minimum):

- [ ] Production README
- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] CRUD Tunes via Synth
- [ ] Share tunes via feed
- [ ] Discoverable tunes
- [ ] User Pages


## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

###Phase 1: Backend setup and Front End User Authentication (2 days w8d2-3)
**Objective:** Front-end authentication with functioning Rails back-end. Hosted on Heroku.
###Phase 2: Synth, tunes and API  (3 days w8d4-w9)
**Objective:** Synth works with API to CRUD tunes.
###Phase 3: Tunes sharing and feeds (2 days w9d1-d2)
**Objective:** Tunes can be passed from private to public feed. Feeds load tunes upon login. Tunes can be liked by users.
###Phase 4: Discover tunes (2 days w9d3-d4)
**Objective:** Tune index page that allows for browsing public feed, songs can be searched by name/tags.
###Phase 5: User pages (1 days w9d5)
**Objective:** Users have profile pages displaying user-info, tunes.

### Bonus Features (TBD)
- [ ] Synth instrument options
- [ ] Custom key-mapping
- [ ] Changelogs for Notes
- [ ] Multiple sessions
