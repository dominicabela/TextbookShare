import React, { Component } from 'react';

import withAuthorization from './withAuthorization';
import { db } from '../firebase';
import Books from 'google-books-search';
import Listing from './Listing.js';

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
      <form onSubmit={this.onSubmit} className="searchForm">
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
      this.setState(() => ({
        books: snapshot.val()
      }))
    );
  }

  render() {

    const { books } = this.state;

    return (
      <div className='search-form'>
        <SearchForm history={this.props}/>
        <br/><br/>
        { !!books && <UserList books={books} /> }
        { !!books && <Listing data={books} /> }
      </div>
    );
  }
}

function getBookInfo(book) {
  Books.search(book, function(error, results) {
    if ( ! error ) {
        console.log(results[0]['title']);
        return(results[0]['title']);
    } else {
        console.log(error);
        return('no title found');
    }
  })
}

const UserList = ({ books }) =>
  <div className='booklist'>
    <h2>Available Books:</h2>
    <table>
      <tbody>
      <tr>
        <th>ISBN</th>
        <th>Price</th>
        <th>Contact</th>
      </tr>
      {Object.keys(books).map(key =>
        <tr key={key}>
          <td>{key}</td>
          <td>{books[key].price}</td>
          <td>{books[key].number}</td>
        </tr>
      )}
      </tbody>
    </table>
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(SearchPage);

export {
  SearchForm
};
