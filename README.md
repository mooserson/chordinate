# Chordinate

<!-- [Chordinate live][heroku]
Live is WIP currently
[heroku]: http://www.chordinate-app.com -->

Chordinate is a web-application that offers a light-weight instrument to encourage musical creativity and social play. The project was a chance to grow as a web-developer working under deadline.  

[![Chordinate](/docs/img/maketunes.jpg)](http://www.chordinate-app.com)

BIG THANKS: Chordinate was visually designed by Rachel Needle -- a truly brilliant artist and generous friend (Product Designer @ Apple). Thank you and thanks to those who took time to check out the app.

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

## Keyboard
[![Keyboard](/docs/img/keyboard.jpg)](http://www.chordinate-app.com)
The app is built around the keyboard which determines the URL depending on if it is in recording or playback state.


## Songs

#### Notes are built by mapping a list of keyboard keys through a function that generates frequencies to create AudioContext nodes.

```javascript
const makeTones = keys => {
  let tones = {};
  keys.forEach((key, idx) => {
    tones[key] = 329.63 * Math.pow(2, (idx/12));
  });
  return tones;
};
```
#### Songs are then saved in with note-keys in an array of slices which can be played back by storing the difference from the time the song started and the time the note or chord was played.

```javascript
slices:
[
  { notes: [ 'a' ], timeSlice: 1250191 },
  { notes: [], timeSlice: 1255000 },
  { notes: [ 'a', 's' ], timeSlice: 1265180 }
  { notes: [], timeSlice: 1279511 }
]
```
## Sharing
[![Sharing](/docs/img/social.jpg)](http://www.chordinate-app.com)
#### Songs go to a feed that sorts by age, likes and plays. Songs are searchable and clicking a username will show all the user's songs.


The features for a minimum-viable-product were:

- [ ] New account creation, login, and guest/demo login
- [ ] CRUD Tunes via Synth
- [ ] Share tunes via feed
- [ ] Discoverable tunes
- [ ] User Pages

## Future features
I hope to add more to user interaction with friends and follows. I also hope to fill out the keyboard with scales and instruments. Layering songs and also live jam-sessions--plenty of room for growth.
