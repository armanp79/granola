exports.addItem = (item) => ({
  type: 'ADD_TO_CART',
  payload: item
});


exports.removeItem = (item) => ({
  type: 'REMOVE_FROM_CART',
  payload: item
});

exports.selectProduct = (item) => ({
  type: 'SELECT_PRODUCT',
  payload: item
});


exports.selectBlogPost = (item) => ({
  type: 'SELECT_BLOG_POST',
  payload: item
});

exports.getProducts = (item) => ({
  type: 'GET_PRODUCTS',
  payload: item
});

exports.getBlogPosts = (item) => ({
  type: 'GET_BLOG_POSTS',
  payload: item
});
