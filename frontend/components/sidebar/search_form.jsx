import React from 'react';

class SearchForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  componentWillMount() {
    this.props.cancelSearch();
  }

  componentDidUpdate() {
   if (this.state.query === "") {
     this.props.cancelSearch();
     $('.search-clear .fa').addClass('hidden');
   } else {
     $('.search-clear .fa').removeClass('hidden');
   }
  }

  update(e) {
    this.setState({
      query: e.target.value
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    $('.search-clear .fa').removeClass('fa-times').addClass('fa-circle-o-notch');
    this.props.requestSearchSongs(this.state.query);
  }

  // searchClearButton () {
  //   if (this.state.query) {
  //     return(
  //       <span className="search-clear" onClick={this.clearSearch.bind(this)}>
  //         <i className="fa fa-times" aria-hidden="true" />
  //       </span>
  //     );
  //   }
  // }

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
