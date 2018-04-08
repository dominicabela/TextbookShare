import React, { Component } from 'react';
import { db } from '../firebase';

class HomePage extends Component {
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
      <div>
        <h1 className='home'>Home Page</h1>
        { !!books && <UserList books={books} /> }
      </div>
    );
  }
}

const UserList = ({ books }) =>
  <div>
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

export default HomePage;
