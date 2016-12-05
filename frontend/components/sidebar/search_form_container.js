import {connect} from 'react-redux';
import SearchForm from './search_form';
import {
  requestSearchSongs,
  receiveSearchSongs,
  receiveUserSongs,
  receiveUserSongsErrors
} from '../../actions/lists_actions';

const mapDispatchToProps = dispatch => ({
  requestSearchSongs: query => dispatch(requestSearchSongs(query)),
  clearSearch: () => dispatch(receiveSearchSongs("")),
  clearUser: () => dispatch(receiveUserSongs("")),
  clearErrors: () => dispatch(receiveUserSongsErrors(""))
});

export default connect(
  null,
  mapDispatchToProps
)(SearchForm);
