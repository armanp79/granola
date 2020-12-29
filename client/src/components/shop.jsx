import React from 'react';
import Footer from './footer.jsx';
import Header from './header.jsx';
import { images } from './images/images.jsx';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import ProductCard from './productCard.jsx';

import {  Link, withRouter } from "react-router-dom";
import axios from 'axios';

class Shop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { history } = this.props;
    history.push('/product')
  }

  componentDidMount() {
    axios.get('/api/products')
      .then(response=>{
        this.setState({
          products: response.data
        })
      });
  }



  render () {
    if (this.state.products.length === 0) {
      return (
        <div className="wrapper">

          <div className="shop-container" style={{minHeight:'70vh', marginTop: '110px'}}>
            <div>Shop</div>
            <div className="shop-card-container">
              <CardColumns onClick={this.handleClick}>

              </CardColumns>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="wrapper">

          <div className="shop-container" style={{minHeight:'70vh', marginTop: '110px'}}>
            <div>Shop</div>
            <div className="shop-card-container">
              <CardColumns onClick={this.handleClick}>
                {this.state.products.map(item => <ProductCard product={item}/>)}
              </CardColumns>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Shop);