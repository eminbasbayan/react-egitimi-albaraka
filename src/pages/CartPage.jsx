import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductItem from '../components/ProductItem';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      {cartItems.map((cartItem) => (
        <ProductItem key={cartItem.id} {...cartItem} cart />
      ))}
    </div>
  );
};

export default CartPage;
