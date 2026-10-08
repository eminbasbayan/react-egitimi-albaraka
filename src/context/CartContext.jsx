import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    const findCartItem = cartItems.find(
      (cartItem) => cartItem.id === product.id,
    );

    if (findCartItem) {
      const newCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === findCartItem.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }

        return cartItem;
      });

      setCartItems(newCartItems);
    } else {
      setCartItems([{ ...product, quantity: 1 }, ...cartItems]);
    }

    toast.success(`${product.title} sepete başarıyla eklendi!`);
  }

  function deleteFromCart(productId) {
    const filteredCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== productId,
    );

    setCartItems(filteredCartItems);
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        deleteFromCart,
        cartItems,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
