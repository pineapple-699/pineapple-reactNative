import { createAction, handleActions } from 'redux-actions';

const defaultState = {
  products: [],
};

// ACTIONS

const setProducts = createAction('SET_PRODUCTS');

const reducer = handleActions(
  {
    [setProducts]: (state, {}) => {
      const products = fetch('https://pineapple-rest-api.herokuapp.com/products')
        .then((response) => response.json())
        .then(async (responseJson) => {
          const { products } = await responseJson;
          return products
        });
      
      return {
        ...state,
        products: products,
      }
    },
  },
  defaultState
);

const getData = (state) => state.api;

export default reducer;
export { setProducts, getData };
