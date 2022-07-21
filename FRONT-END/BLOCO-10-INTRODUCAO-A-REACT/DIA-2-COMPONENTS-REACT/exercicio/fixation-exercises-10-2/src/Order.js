// arquivo Order.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Order extends Component {
  render() {
    const { id, user, product, price } = this.props.order;

    return (
      <div className="order">
        <h2> ID: {id} - {user} bought {product} for {price.value} {price.currency} </h2>
      </div>
    );
  }
}

Order.propTypes = {
  user: PropTypes.string,
  product: PropTypes.string,
  price: PropTypes.number,
};

Order.defaultProps = {
  name: 'preencher nome!!'
}

export default Order;