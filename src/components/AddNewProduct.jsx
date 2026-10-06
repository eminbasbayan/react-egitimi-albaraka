import { useState } from 'react';
import './AddNewProduct.css';

function AddNewProduct() {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleImageUrlChange(event) {
    setImageUrl(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  return (
    <div className="add-new-product">
      <form>
        <label>
          <b>Ürün ismi: {title}</b>
          <input
            type="text"
            onChange={handleTitleChange}
            placeholder="Bir ürün ismi giriniz!"
          />
        </label>
        <label>
          <b>Ürün görsel: {imageUrl}</b>
          <input
            type="text"
            onChange={handleImageUrlChange}
            placeholder="Bir ürün görsel giriniz!"
          />
        </label>
        <label>
          <b>Ürün fiyatı: {price} </b>
          <input
            type="number"
            onChange={handlePriceChange}
            placeholder="Bir ürün fiyatı giriniz!"
          />
        </label>
      </form>
    </div>
  );
}

export default AddNewProduct;
