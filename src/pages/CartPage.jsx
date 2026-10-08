import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductItem from '../components/ProductItem';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  const cartTotal = cartItems.reduce(
    (toplam, urun) => urun.quantity * urun.price + toplam,
    0,
  );

  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      {cartItems.map((cartItem) => (
        <ProductItem key={cartItem.id} {...cartItem} cart />
      ))}

      <div className="cart-total mt-4 text-3xl">
        Toplam: <b>{cartTotal.toFixed(2)}₺</b>
      </div>
    </div>
  );
};

export default CartPage;
