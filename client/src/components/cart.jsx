import React from 'react';

import Counter from './products/counter.jsx';
import images from './images/images.jsx';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.hide = this.hide.bind(this);
  }

  hide(e) {
    e.preventDefault();
    this.props.hideModal();
  }

  render() {
    if (this.props.show) {
      return (
        <div>
          <div className="modal-back"></div>

          <div className="cart-container">
            <div className="row" style={{padding:'15px'}}>
              <h3 className="col">Cart</h3>
              <button onClick={this.hide} className="col">x</button>
            </div>
            <br />
            <div className="cart-items" style={{padding:'15px'}}>
              <div className="row">
                <img className="col" src={images[5]}></img>
                <div className="col">
                  <h2> Title </h2>
                  <div className="row">
                    <Counter />
                    <p>10 bitcoins</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-footer">
              <div>
                <h3>Subtotal</h3>
                <h3>10 bitcoin</h3>
              </div>
              <p>Shipping, taxes, and discount codes calculated at checkout.</p>
              <button>CHECK OUT</button>
            </div>
          </div>
        </div>
      );
    } else {
      return(null);
    }
  }
}

export default Cart;