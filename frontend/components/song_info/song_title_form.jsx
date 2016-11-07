import React from 'react';

class SongTitleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    };
  }

  // componentDidMount() {
  //   // if (this.props.disabled) {
  //   //   $(".song-title-form :input").attr("disabled", true);
  //   // }
  //
  // }

  // componentWillUnmount () {
  //   this.props.updateTitle(this.state.title);
  // }

  update() {
    return e => this.setState({
      title: e.target.value
    }, this.props.updateTitle(e.target.value));
  }

  render () {
    return(
      <div className="song-title-container" >
        <form className="song-title-form">
          <input
            value = {this.state.title}
            type="text"
            placeholder="Untitiled"
            onChange={this.update()}/>
        </form>
      </div>
    );
  }
}



export default SongTitleForm;
