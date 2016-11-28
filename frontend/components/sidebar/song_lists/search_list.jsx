import React from 'react';
import SongListItemContainer from './song_list_item_container';

class SearchList extends React.Component {
  constructor(props) {
    super(props);
  }

  buildListRow(songs, num) {
    return (
      <div className="song-row search" key={num}>
      {songs.map(song => (
        <SongListItemContainer
          id={song.id}
          user={song.user}
          title={song.title}
          liked={song.liked}
          key={song.id}/>
      ))}
      </div>
    );
  }

  buildList() {
    let list = [];
    let songs;

    for (var i = 0; i < this.props.songs.length - 1; i += 2) {
      songs = this.props.songs.slice(i,i + 2);
      list.push(this.buildListRow(songs, i));
    }
    return list;
  }

  render () {
    if (this.props.songs.length === 0) {
      return (
        <div className="song-list empty" id="search-song" key={1}>
          No songs match
        </div>
      );
    } else if (this.props.songs.length === 1) {
      return (
        <div className="song-list" id="search-song" key={2}>
          {this.buildListRow(this.props.songs,1)}
        </div>
      );
    } else {
      return(
        <div className="song-list" id="search-song" key={3}>
          {this.buildList()}
        </div>
      );
    }
  }
}

export default SearchList;
