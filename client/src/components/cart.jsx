import React from 'react';

import Counter from './products/counter.jsx';
import images from './images/images.jsx';
import { withRouter } from 'react-router-dom';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.hide = this.hide.bind(this);
    this.handleCheckOut = this.handleCheckOut.bind(this);
  }

  hide(e) {
    e.preventDefault();
    this.props.hideModal();
  }

  handleCheckOut(e) {
    e.preventDefault();
    const { history } = this.props;
    this.hide(e);
    history.push('/checkout');
  }

  render() {
    if (this.props.show) {
      return (
        <div>
          <div className="modal-back"></div>

          <div className="cart-container">
            <div className="cart-content">

              <div className="row cart-header" style={{padding:'15px'}}>
                <h3 className="col">Cart</h3>
                <button onClick={this.hide} className="col cart-close-button">X</button>
              </div>
              <hr />

              <div className="cart-items" style={{padding:'15px'}}>
                <div className="row">
                  <img className="col" src={images[5]}></img>
                  <div className="col">
                    <h2> Title </h2>
                    <div className="row">
                      <Counter />
                      <p style={{margin:'0', display:'flex', alignItems:'center'}}>10 bitcoins</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cart-footer">
                <hr />
                <div className="row">
                  <div className="col"><h5>Subtotal</h5></div>
                  <div className="col" style={{margin:'0', display:'flex', alignItems:'center', fontSize:'12px'}}>10 bitcoin</div>
                </div>
                <p style={{fontSize:'12px'}}>Shipping, taxes, and discount codes calculated at checkout.</p>
                <button className="checkout-btn" onClick={this.handleCheckOut}>CHECK OUT</button>
              </div>

            </div>
          </div>
        </div>
      );
    } else {
      return(null);
    }
  }
}

export default withRouter(Cart);