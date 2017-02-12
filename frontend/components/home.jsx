import React from 'react';
import SaveKeyboardContainer from './synth/save_keyboard_container';
import RecordKeyboardContainer from './synth/record_keyboard_container';
import PlaybackKeyboardContainer from './synth/playback_keyboard_container';
import DiscoverContainer from './sidebar/discover_container';

class Home extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    var hamburgerButton = document.querySelector('.hamburger-button');
    var discover = document.querySelector('.discover');
    var home = document.querySelector('.home');

    hamburgerButton.addEventListener('click', function(e) {
      discover.classList.toggle("open");
      hamburgerButton.classList.toggle("open");
      e.stopPropagation();
    });

    home.addEventListener('click', function(e) {
      if(!e.target.closest(".discover")){
        discover.classList.remove('open');
        hamburgerButton.classList.remove('open');
      }
    });
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
        {this.synth()}
        <DiscoverContainer />
        <div className="hamburger-button">
          &#9776;
        </div>
        <div className="github-link">
          <a href ="https://github.com/mooserson/chordinate">
            <i className="fa fa-github" aria-hidden="true"/>
          </a>
        </div>
        <div className="portrait-warning">
          <i className="fa fa-repeat" aria-hidden="true"></i>
          Rotate to landscape for best experience!
          <i className="fa fa-repeat" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default Home;
