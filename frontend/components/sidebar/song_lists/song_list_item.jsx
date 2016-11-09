import React from 'react';
import {Link, withRouter} from 'react-router';

class SongListItem extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div className="song-item">
        <div className="user">{this.props.user}</div>
        <div className="song-name">
          <i className="fa fa-play-circle" aria-hidden="true"></i>
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

export default withRouter(SongListItem);
