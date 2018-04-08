import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as routes from '../constants/routes';

const SearchPage = ({ history }) =>
  <div className='search-form'>
    <h1>Search</h1>
    <SearchForm history={history}/>
  </div>

const INITIAL_STATE = {
  ISBN: '',
  title: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      ISBN,
      title,
    } = this.state;

    const {
      history,
    } = this.props;

    event.preventDefault();
  }

  render() {
    const {
      ISBN,
      title,
      error,
    } = this.state;

    const isInvalid =
      ISBN === '' &&
      title === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={ISBN}
          onChange={event => this.setState(byPropKey('ISBN', event.target.value))}
          type="text"
          placeholder="ISBN"
        />
        <input
          value={title}
          onChange={event => this.setState(byPropKey('title', event.target.value))}
          type="text"
          placeholder="Title"
        />
        <button disabled={isInvalid} type="submit">
          Search
        </button>

        { error && <p className='error-message'>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SearchPage);

export {
  SearchForm
};
