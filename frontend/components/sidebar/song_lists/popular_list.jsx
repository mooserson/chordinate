import React from 'react';
import SongListItem from './song_list_item';
import {hashHistory} from 'react-router';

class PopularList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.requestPopularSongs();
  }

  buildListRow(songs, num) {
    return (
      <div className="song-row" id={num}>
      {songs.map(song => (
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

  render () {
      return(
        <div className="song-list" id="popular">
          {this.buildListRow(this.props.songs.slice(0,2), 1)}
          {this.buildListRow(this.props.songs.slice(2), 2)}
        </div>
      );
  }
}

export default PopularList ;
