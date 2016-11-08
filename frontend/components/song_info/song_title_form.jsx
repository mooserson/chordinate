import React from 'react';

class SongTitleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.currentSong.title
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      title: newProps.currentSong.title
    });
  }

  update() {
    return e => this.setState({
      title: e.target.value
    }, this.props.updateTitle(e.target.value));
  }

  render () {
    return(
      <div className="song-title-container">
        <span className="song-owner">{this.props.currentSong.user}</span>
        <form className="song-title-form">
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
