import React from 'react';

class SongItem extends React.Component {
  constructor(props) {
    super(props);
  }

  likeHeart() {
    if (true) {

    }
  }

  render() {
    return (
      <div className="song-item">
        <div className="user">{this.props.user}</div>
        <div className='title'>{this.props.title}</div>
      </div>
    );
  }
}

export default SongItem;

// needs user title liked
