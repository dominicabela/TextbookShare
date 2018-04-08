import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as routes from '../constants/routes';
import withAuthorization from './withAuthorization';

const SellPage = ({ history }) =>
  <div className='search-form'>
    <h1>Sell</h1>
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
    } = this.state;

    const {
      history,
    } = this.props;

    event.preventDefault();
  }

  render() {
    const {
      ISBN,
      price,
      error,
    } = this.state;

    const isInvalid =
      ISBN === '' ||
      price === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={ISBN}
          onChange={event => this.setState(byPropKey('ISBN', event.target.value))}
          type="text"
          placeholder="ISBN"
        />
        <input
          value={price}
          onChange={event => this.setState(byPropKey('price', event.target.value))}
          type="text"
          placeholder="Price"
        />
        <button disabled={isInvalid} type="submit">
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
