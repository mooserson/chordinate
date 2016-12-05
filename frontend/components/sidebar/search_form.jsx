import React from 'react';

class SearchForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  componentWillMount() {
    this.props.clearSearch();
  }

  componentDidUpdate() {
   if (this.state.query === "") {
     this.props.clearSearch();
     $('.search-clear .fa').addClass('hidden');
   } else {
     $('.search-clear .fa').removeClass('hidden');
   }
  }

  update(e) {
    debugger;
    this.setState({
      query: e.target.value
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    $('.search-clear .fa').removeClass('fa-times').addClass('fa-circle-o-notch');
    this.props.requestSearchSongs(this.state.query);
    this.props.clearUser();
    this.props.clearErrors();
  }

  clearSearch() {
    this.setState({
      query: ""
    });
  }

  render () {
    return(
      <form
        className="search-form"
        onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Search"
          id="search"
          tabIndex='3'
          onChange={this.update.bind(this)}
          value={this.state.query}>
        </input>
        <span className="search-clear" onClick={this.clearSearch.bind(this)}>
          <i className="fa fa-times hidden" aria-hidden="true" />
        </span>
      </form>
    );
  }


}

export default SearchForm;
