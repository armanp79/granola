import React from 'react';


import { images } from './images/images.jsx';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import ProductCard from './productCard.jsx';

import {  Link, withRouter } from "react-router-dom";
import axios from 'axios';


import store from '../store/store.js';

class Shop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(product) {
    console.log('props', product);
    console.log('Initial state: ', store.getState())
    const { history } = this.props;
    history.push(`/product/${product}`);
  }

  componentDidMount() {
    axios.get('/api/products/all')
      .then(response=>{
        store.dispatch({ type: 'GET_PRODUCTS', payload: response.data});
        this.setState({
          products: response.data
        });
      });
  }



  render () {
    return (
      <div className="wrapper">

        <div className="shop-container" style={{minHeight:'70vh', marginTop: '110px'}}>
          <div>Shop</div>
          <div className="shop-card-container">
            <CardColumns>
              {this.state.products.map(item => <ProductCard product={item} clickHandler={this.handleClick}/>)}
            </CardColumns>
          </div>
        </div>
      </div>
    );
  }
}





export default withRouter(Shop);