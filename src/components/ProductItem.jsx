import { toast } from 'react-toastify';
import './ProductItem.css';
import Button from './UI/Button';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductItem(props) {
  const { setProducts, cart, ...product } = props;
  const { addToCart, deleteFromCart } = useContext(CartContext);

  function handleDeleteItem() {
    if (window.confirm('Silmek istediğinize emin misiniz?')) {
      setProducts(product.id);

      toast.success('Ürün başarıyla silindi!', {
        autoClose: 3000,
        position: 'bottom-center',
      });
    }
  }

  return (
    <div className="product-item">
      <img src={product.imageURL} alt={product.title} />

      <div className="product-item-info">
        <b className="product-item-title">{product.title}</b>
        <span>{product.price}₺   {props.cart && `x ${props.quantity}`}</span>
        {cart ? (
          <Button type="danger" onClick={()=> deleteFromCart(product.id)}>
            Sepetten Sil
          </Button>
        ) : (
          <>
            <Button type="primary" onClick={() => addToCart(product)}>
              Sepete Ekle
            </Button>
            <Button type="danger" onClick={handleDeleteItem}>
              Ürünü Sil
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
