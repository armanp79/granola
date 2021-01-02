import React from 'react';

import { images } from '../images/images.jsx';
import Counter from './counter.jsx';

import Cart from '../cart.jsx';
import store from '../../store/store.js';
import { addItem } from '../../actions/actions.js'
import {connect } from 'react-redux';


import { withRouter, Link } from 'react-router-dom';

import axios from 'axios';


class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      product: {title:1, description:1, price:1, images:1},
      cartItem: {}
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  showModal() {
    this.setState({
      show: true
    });
  }

  hideModal() {
    this.setState({
      show: false
    });
  }

  handleAdd(e) {
    e.preventDefault();
    var item = this.state.product;
    var num = document.getElementById("num-items").innerHTML;
    item.quantity = Number(num);
    console.log('checkNumver', num, item.quantity);
    console.log('adding...', item);
    store.dispatch(addItem(item));

    this.showModal();
  }

  componentDidMount() {
    console.log(this.props)
    const id = this.props.match.params.id;
    axios.get(`/api/products/${id}`)
      .then(response=>{
        this.setState({
          product: response.data[0]
        });
      });

  }

  render() {
    return (
      <div className="container-fluid">
        <Cart
          show = {this.state.show}
          hideModal = {this.hideModal}
        />
        <div className="product-container" style={{minHeight:'70vh', marginTop: '110px'}}>
          <div className="row">
            <div className="col">
              <img src={this.state.product.images} />
            </div>

            <div className="col product-information">
              <h1>
                {this.state.product.title}
              </h1>
              <p>{this.state.product.description}</p>

              <div>${this.state.product.price}</div>
              <div className="row">
                <Counter />
                <button onClick={this.handleAdd}>ADD TO CART</button>
              </div>

              <Link to='/shop'> Continue Shopping</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ProductPage);