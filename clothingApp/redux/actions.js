export const addItemToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item,
  });
  
  export const removeItemFromCart = (itemId) => ({
    type: 'REMOVE_FROM_CART',
    payload: itemId,
  });
  