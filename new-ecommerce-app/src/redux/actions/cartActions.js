export const addToCart = (product) => {

    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  };

  export const removeFromCart = (product) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: product,
    };
  };

  export const clearCart = () => {
    return {
      type: 'CLEAR_CART',
    };
  };

  export const increment = (product) => {

    return {
      type: 'INCREMENT',
      payload: product,
    };
  };

  export const decrement = (product) => {

    return {
      type: 'DECREMENT',
      payload: product,
    };
  };

