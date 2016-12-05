import React from 'react';
import SaveKeyboardContainer from './synth/save_keyboard_container';
import RecordKeyboardContainer from './synth/record_keyboard_container';
import PlaybackKeyboardContainer from './synth/playback_keyboard_container';
import DiscoverContainer from './sidebar/discover_container';

class Home extends React.Component {
  constructor (props) {
    super(props);
  }

  synth () {
    switch (this.props.location.pathname) {
      case "/home":
        if (this.props.isSaving) {
          return <SaveKeyboardContainer />;
        } else {
        return <RecordKeyboardContainer/>;
        }
      default:
        return <PlaybackKeyboardContainer />;
    }
  }

  render() {
    return(
      <div className="home">
        <div className="welcome">
          Welcome {this.props.currentUser}
        </div>
        {this.synth()}
        <DiscoverContainer />
        <div className="github-link">
          <a href ="https://github.com/mooserson/chordinate">
            <i className="fa fa-github" aria-hidden="true"/>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
