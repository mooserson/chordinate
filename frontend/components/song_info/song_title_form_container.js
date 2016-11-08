import {connect} from 'react-redux';
import SongTitleForm from './song_title_form';
import {updateTitle} from '../../actions/current_song_actions';

const mapStateToProps = ({ currentSong, session: {currentUser} }) => {
  if (currentUser) {
    return({
      currentSong,
      isOwner: currentUser.username === currentSong.user
    });
  } else {
    return ({
      currentSong,
      isOwner: false
    });
  }
};

const mapDispatchToProps = dispatch => ({
  updateTitle: title => () => dispatch(updateTitle(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongTitleForm);
