import {connect} from 'react-redux';
import SearchForm from './search_form';
import {requestSearchSongs, receiveSearchSongs} from '../../actions/lists_actions';

const mapDispatchToProps = dispatch => ({
  requestSearchSongs: query => dispatch(requestSearchSongs(query)),
  cancelSearch: () => dispatch(receiveSearchSongs(""))
});

export default connect(
  null,
  mapDispatchToProps
)(SearchForm);
