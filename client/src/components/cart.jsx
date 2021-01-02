import React from 'react';

import Counter from './products/counter.jsx';
import { images } from './images/images.jsx';
import { withRouter } from 'react-router-dom';
import CartItem from './cartItem.jsx';

import { connect } from 'react-redux';

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

  getSubtotal() {
    const items = this.props.cartItems;
    var price = 0;
    for (let i = 0; i < items.length; i++) {
      price += items[i].price * items[i].quantity;
    }
    return price;
  }

  render() {
    console.log('cartProps', this.props, 'state', this.state)
    if (this.props.show) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
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
                {this.props.cartItems.map(item => <CartItem item={item}/>)}
              </div>

              <div className="cart-footer">
                <hr />
                <div className="row">
                  <div className="col"><h5>Subtotal</h5></div>
                  <div className="col" style={{margin:'0', display:'flex', alignItems:'center', fontSize:'12px'}}>${this.getSubtotal()}</div>
                </div>
                <p style={{fontSize:'12px'}}>Shipping, taxes, and discount codes calculated at checkout.</p>
                <button className="checkout-btn" onClick={this.handleCheckOut}>CHECK OUT</button>
              </div>

            </div>
          </div>
        </div>
      );
    } else {
      document.getElementsByTagName('body')[0].style.overflow = 'initial';
      return(null);
    }
  }
}

const mapStateToProps = state => {
  console.log('sToProp', state);
  return({cartItems: state.cart.cartItems});
}

// {
//   cartItems: state.cartItems
// })

export default connect(mapStateToProps, null)(withRouter(Cart));