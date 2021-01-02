import React from 'react';
import Counter from './products/counter.jsx';

const CartItem = ({item}) => {
  console.log('item: ', item);
  return (
    <div className="row" style={{paddingBottom:'10px'}}>
      <img className="col" style={{objectFit:'cover'}} src={item.images}></img>
      <div className="col">
        <h6 className="cart-modal-product-title"> {item.title} </h6>
        <div className="row" style={{justifyContent:'space-between'}}>
          <Counter quantity={item.quantity}/>
          <p style={{margin:'0', display:'flex', alignItems:'center'}}>${item.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

