import Redux from 'redux';

var initialState = {
  cartItems: [],
  products: [],
  blogPosts: [],
  selectedProduct: {},
  selectedBlogPost: {}
};


var cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TO_CART': {
      var items = state.cartItems;
      console.log('reducer', items);
      for (let i=0; i<items.length; i++) {
        if (items[i].productid === action.payload.productid) {
          console.log('in if of reducer')
          items[i].quantity += action.payload.quantity;
          return {
            ...state,
            cartItems: items
          }

        }
      }
      return {
        ...state,
        cartItems: state.cartItems.concat([action.payload])
      }
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.item !== action.payload.item)
      }
    }
    case 'MODIFY_CART':
      return state;
    default:
      return state;
  }
};

export default cartReducer;