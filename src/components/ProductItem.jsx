import { useState } from 'react';
import './ProductItem.css';

function ProductItem(props) {
  const [title, setTitle] = useState(props.title);

  function handleTitleChange() {
    setTitle('Şapka');
  }

  return (
    <div className="product-item">
      <img src={props.imageUrl} alt="Çanta Görseli" />

      <div className="product-item-info">
        <b>{title}</b>
        <span>{props.price}₺</span>
        <button onClick={handleTitleChange}>Title Değiştir</button>
      </div>
    </div>
  );
}

export default ProductItem;
