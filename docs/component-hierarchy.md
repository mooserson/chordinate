# Component Hierarchy
**AuthFormContainer**
- AuthForm

**HomeContainer**
- SynthContainer
  + Synth
  - SongInfoContainer
    + SongInfo
- SideBarContainer
  - PlaybackSongDetail
  - NavButton
  - SearchBar
  - SongIndexContainer
    + SongIndex
  - SearchContainer
    + SearchDetail
  - ProfileContainer
    + ProfileDetail

## Routes and Container Components

- path="/sign-up" component="AuthFormContainer"
- path="/sign-in" component="AuthFormContainer"
- path="/home" component="HomeContainer"
  - index route component="RecordContainer, DiscoverContainer"
  - path="/home/song/:id" component="PlayContainer, DiscoverContainer"
  - path="/home/profile" component="PlayContainer, ProfileContainer"
  - path="/home/profile/:username" component="RecordContainer, ProfileContainer"
    - path="/home/profile/:username/song/:id" component="SearchContainer"
