const removeItem = (item) => ({
  type: 'REMOVE_FROM_CART',
  payload: item
});

export default removeItem;