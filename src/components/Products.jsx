import { useReducer } from 'react';
import ProductItem from './ProductItem';
import AddNewProduct from './AddNewProduct';
import { initialState, reducerFunction } from './productReducer';
import Modal from './UI/Modal';
import './Products.css';

function Products() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  function handleNewProduct(newProduct) {
    dispatch({
      type: 'ADD_NEW_PRODUCT',
      newProducts: [newProduct, ...state.products],
    });
  }

  return (
    <div className="products">
      <h2>Products Component</h2>
      <AddNewProduct
        handleNewProduct={handleNewProduct}
        onShowModal={() => dispatch({ type: 'OPEN_MODAL' })}
      />

      <div className="product-items">
        {state.products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              imageURL={product.imageURL}
              title={product.title}
              price={product.price}
              id={product.id}
              setProducts={(productId) =>
                dispatch({ type: 'REMOVE_PRODUCT', productId })
              }
            />
          );
        })}
      </div>

      {state.isShowModal && (
        <Modal
          onCloseModal={() => dispatch({ type: 'CLOSE_MODAL' })}
          title="Inputlar boş geçilemez!"
          description="Lütfen inputları doldurunuz!"
        />
      )}
    </div>
  );
}

export default Products;
