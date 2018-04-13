import React, { Component } from 'react';
import Books from 'google-books-search';

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      data: props.data,
    };
  }

  componentDidMount() {
    Books.search(this.state.data, function(error, results) {
      if ( ! error ) {
          this.setState(() => ({
            title: results[0]['title'],
          }))
      } else {
          console.log(error);
      }
    })
  }

  render() {

    const { title } = this.state;

    return (
      <div>
        { !!title && <h1>{title}</h1> }
      </div>
    );
  }
}

function getBookInfo(book) {

}

export default Listing;
