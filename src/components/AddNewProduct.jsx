import { useState } from 'react';
import './AddNewProduct.css';

function AddNewProduct() {
  const [product, setProduct] = useState({
    title: '',
    imageUrl: '',
    price: '',
  });

  function handleChange({ target: { name, value } }) {
    // const { name, value } = target;

    setProduct({ ...product, [name]: value });
  }

  return (
    <div className="add-new-product">
      <form>
        <label>
          <b>Ürün ismi: {product.title}</b>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Bir ürün ismi giriniz!"
            name="title"
          />
        </label>
        <label>
          <b>Ürün görsel: {product.imageUrl}</b>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Bir ürün görsel giriniz!"
            name="imageUrl"
          />
        </label>
        <label>
          <b>Ürün fiyatı: {product.price} </b>
          <input
            type="number"
            onChange={handleChange}
            placeholder="Bir ürün fiyatı giriniz!"
            name="price"
          />
        </label>
      </form>
    </div>
  );
}

export default AddNewProduct;
