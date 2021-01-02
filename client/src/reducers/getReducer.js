import Redux from 'redux';


var getReducer = (state=[], action) => {
  switch(action.type) {
    case 'GET_PRODUCTS': {
      return {
        ...state,
        products : action.payload
      }
    }
    case 'GET_BLOG_POSTS': {
      return {
        ...state,
        blogPosts : action.payload
      }
    }
    default:
      return state;
  }
}

export default getReducer;
