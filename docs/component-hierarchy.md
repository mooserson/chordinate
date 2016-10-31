#Component Hierarchy
**AuthFormContainer**
  -AuthForm
**HomeContainer**
-SynthContainer
  +Synth
  -RecordingSongContainer
    +RecordingSongDetail
-PlaybackSongContainer
  +PlaybackSongDetail
-SideBarContainer
  -NavButton
  -SearchBar
  -SongIndexContainer
    +SongIndex
  -SearchContainer
    +SearchDetail
  -ProfileContainer
    +ProfileDetail

## Routes and Container Components

path="/sign-up" component="AuthFormContainer"
path="/sign-in" component="AuthFormContainer"
path="/home" component="HomeContainer"
path="/home/song/:id" component="PlaybackSongContainer"
path="/home/profile" component="ProfileContainer"
path="/home/profile/:username" component="ProfileContainer"
path="/home/search" component="SearchContainer"
