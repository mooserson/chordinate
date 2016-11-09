import React from 'react';
import SongListItem from './song_list_item';
import {hashHistory} from 'react-router';

class NewList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.requestNewSongs();
  }

  render () {
      return(
        <div className="new-song-list">
          {this.props.songs.map(song => (
                <SongListItem
                  id={song.id}
                  user={song.user}
                  title={song.title}
                  liked={song.liked}
                  key={song.id}/>
            ))}
        </div>
      );
  }
}

export default NewList ;
