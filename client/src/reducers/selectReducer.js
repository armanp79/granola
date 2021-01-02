import Redux from 'redux';

var initialState = {
  cartItems: [],
  products: [],
  blogPosts: [],
  selectedProduct: {},
  selectedBlogPost: {}
};

var selectReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'SELECT_PRODUCT':
      return state;
    case 'SELECT_BLOG_POST':
      return state;
    default:
      return state;
  }
}

export default selectReducer;