import React from 'react';

class SearchForm extends React.Component {
  constructor (props) {
    super(props);
  }

  handleSubmit (e) {

  }

  render () {
    return(
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          tabIndex='3' />
      </form>
    );
  }


}
