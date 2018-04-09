import React, { Component } from 'react';
import { db } from '../firebase';
import withAuthorization from './withAuthorization';

const SellPage = ({ history }) =>
  <div className='search-form'>
    <SellForm history={history}/>
  </div>

const INITIAL_STATE = {
  ISBN: '',
  price: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SellForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      ISBN,
      price,
      number,
    } = this.state;

    const {
      history,
    } = this.props;

    db.doCreateBook(ISBN, price, number)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      ISBN,
      price,
      number,
      error,
    } = this.state;

    const isInvalid =
      ISBN === '' ||
      price === '' || number === '';

    return (
      <form onSubmit={this.onSubmit} className="sellForm">
        <input
          value={ISBN}
          onChange={event => this.setState(byPropKey('ISBN', event.target.value))}
          type="text"
          placeholder="ISBN"
        />
        <input
          value={price}
          onChange={event => this.setState(byPropKey('price', event.target.value))}
          type="number"
          placeholder="Price"
        />
        <input
          value={number}
          onChange={event => this.setState(byPropKey('number', event.target.value))}
          type="text"
          placeholder="Contact Number"
        />
          <button disabled={isInvalid} type="submit" className="enter" onClick={()=>{ alert('Book Submission Complete!'); }}>
          Sell
          </button>

        { error && <p className='error-message'>{error.message}</p> }
      </form>

    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(SellPage);

export {
  SellForm
};
