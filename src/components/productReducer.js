import { productsData } from "../data/productsData";

const initialState = {
  products: productsData,
  isShowModal: false,
};

function reducerFunction(state, action) {
  switch (action.type) {
    case 'ADD_NEW_PRODUCT':
      return { ...state, products: action.newProducts };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.productId,
        ),
      };
    case 'OPEN_MODAL':
      return { ...state, isShowModal: true };
    case 'CLOSE_MODAL':
      return { ...state, isShowModal: false };
    default:
      return state;
  }
}

export { initialState, reducerFunction };
