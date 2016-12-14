import {connect} from 'react-redux';
import SongTitleForm from './song_title_form';
import {updateTitle} from '../../actions/current_song_actions';

const mapStateToProps = ({ currentSong }) => ({
  title: currentSong.title,
  user: currentSong.user,
  likes: currentSong.likes,
  liked: currentSong.liked,
  plays: currentSong.plays,
  loadIcons: Boolean(currentSong.id)
});

const mapDispatchToProps = dispatch => ({
  updateTitle: title => () => dispatch(updateTitle(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongTitleForm);
