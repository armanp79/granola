import Redux from 'redux';

var cartReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch(action.type) {
    case 'ADD_TO_CART':
      return state.concat(action.payload);
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.item !== action.payload.item);
    case 'MODIFY_CART':
      return action.payload;

    default:
      return state;

  }
};

export default cartReducer;