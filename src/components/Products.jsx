import { useEffect, useReducer, useState } from 'react';
import ProductItem from './ProductItem';
import AddNewProduct from './AddNewProduct';
import { initialState, reducerFunction } from './productReducer';
import Modal from './UI/Modal';
import './Products.css';

function Products() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const [isLoading, setIsLoading] = useState(true);

  function handleNewProduct(newProduct) {
    dispatch({
      type: 'ADD_NEW_PRODUCT',
      newProducts: [newProduct, ...state.products],
    });
  }

  async function fetchProducts() {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();

      dispatch({ type: 'ADD_NEW_PRODUCT', newProducts: data });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products">
      <h2>Products Component</h2>
      <AddNewProduct
        handleNewProduct={handleNewProduct}
        onShowModal={() => dispatch({ type: 'OPEN_MODAL' })}
      />

      {isLoading && <h3>Loading...</h3>}
      <div className="product-items">
        {state.products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              imageURL={product.image}
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
