import React from 'react';
import {Link} from 'react-router';

class SongListItem extends React.Component {
  constructor(props) {
    super(props);
    this.goToUser = this.goToUser.bind(this);
  }

  likeHeart() {
    if (this.props.liked) {
      return (
        <i className="fa fa-heart liked" aria-hidden="true"/>
      );
    } else {
      return (
        <i className="fa fa-heart" aria-hidden="true"/>
      );
    }
  }

  goToUser() {
    this.props.requestUserSongs(this.props.user);
  }

  render() {
    return (
      <div className="song-item">
        <div className="user"
          onClick={this.goToUser}>
          {this.props.user}
        </div>
        <div className="song-name">
          <Link
            to={`home/songs/${this.props.id}`}
            className="play-circle-link">
            <i className="fa fa-play-circle" aria-hidden="true"></i>
          </Link>
          <Link
            to={`home/songs/${this.props.id}`}
            className="title">
            {this.props.title}
          </Link>
          {this.likeHeart()}
      </div>
    </div>
    );
  }
}

export default SongListItem;
