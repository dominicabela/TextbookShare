import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as routes from '../constants/routes';
import withAuthorization from './withAuthorization';
import { db } from '../firebase';

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

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: null,
    };
  }

  componentDidMount() {
    db.onceGetBooks().then(snapshot =>
      this.setState(() => ({ books: snapshot.val() }))
    );
  }

  render() {

    const { books } = this.state;

    return (
      <div className='search-form'>
        <SearchForm history={this.props}/>
        { !!books && <UserList books={books} /> }
      </div>
    );
  }
}

const UserList = ({ books }) =>
  <div className='booklist'>
    <h2>Available Books:</h2>
    <table>
      <tr>
        <th>ISBN</th>
        <th>Price</th>
      </tr>
      {Object.keys(books).map(key =>
        <tr>
          <td>{key}</td>
          <td>{books[key].price}</td>
        </tr>
      )}
    </table>
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(SearchPage);

export {
  SearchForm
};
