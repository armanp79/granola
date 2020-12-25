import React from 'react';

import images from '../images/images.jsx';
import Counter from './counter.jsx';

import Cart from '../cart.jsx';

import {Link} from 'react-router-dom';

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
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
              <img src={images[5]} />
            </div>

            <div className="col product-information">
              <h1>
                Peanut Butter Dark Chocolate Refrigerated 1/2 oz Granola
              </h1>
              <p>Creamy peanut butter meets semi-sweet cocoa and rich dark chocolate chips to add the perfect amount of sweetness without all the guilt. Get your favorite creamy peanut butter and chocolate chip combination but with 13G of complete plant protein to leave you feeling Bright and more than satisfied all day long. Enjoy on the go for one week- take them wherever your journey takes you.</p>

              <div>20 bitcoin</div>
              <div className="row">
                <Counter />
                <button onClick={this.showModal}>ADD TO CART</button>
              </div>

              <Link to='shop'> Continue Shopping</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductPage;