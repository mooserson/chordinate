import React from 'react';

class SongTitleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      title: newProps.title
    });
  }

  update() {
    return e => this.setState({
      title: e.target.value
    }, this.props.updateTitle(e.target.value));
  }

  preventDefault (e) {
    e.preventDefault();
  }

  buildInfoIcons () {
    if (this.props.loadIcons) {
      return(
        <div className="song-info-icons-container">
         <i className="fa fa-heart" aria-hidden="true" />
          <span>{this.props.likes}</span>
          <i className="fa fa-play" aria-hidden="true" />
          <span>{this.props.plays}</span>
        </div>
      );
    }
  }

  render () {
    return(
      <div className="song-title-container">
        <div className="song-info">
          <span className="song-owner">{this.props.user}</span>
          {this.buildInfoIcons()}
        </div>
        <form className="song-title-form" onSubmit={this.preventDefault}>
          <input
            value = {this.state.title}
            type="text"
            placeholder="Untitled"
            onChange={this.update()}
            tabIndex='1' />
        </form>
      </div>
    );
  }
}

export default SongTitleForm;
