import { toast } from 'react-toastify';
import './ProductItem.css';
import Button from './UI/Button';
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

function ProductItem(props) {
  const { count } = useContext(CounterContext);

  console.log(count);

  function handleDeleteItem() {
    if (window.confirm('Silmek istediğinize emin misiniz?')) {
      props.setProducts(props.id);

      toast.success('Ürün başarıyla silindi!', {
        autoClose: 3000,
        position: 'bottom-center',
      });
    }
  }

  return (
    <div className="product-item">
      <img src={props.imageURL} alt="Çanta Görseli" />

      <div className="product-item-info">
        <b className="product-item-title">
          {props.title} {count}
        </b>
        <span>{props.price}₺</span>
        <Button type="danger" onClick={handleDeleteItem}>
          Ürünü Sil
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
