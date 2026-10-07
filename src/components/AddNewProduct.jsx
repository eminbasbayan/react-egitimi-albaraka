import { useState } from 'react';
import './AddNewProduct.css';
import Button from './UI/Button';

function AddNewProduct(props) {
  const [product, setProduct] = useState({
    title: '',
    imageURL: '',
    price: '',
  });

  function handleChange({ target: { name, value } }) {
    // const { name, value } = target;

    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isValid = Object.values(product).every(
      (value) => value.trim() !== '',
    );

    if (!isValid) {
      props.onShowModal();
      return;
    }

    const newProduct = {
      ...product,
      id: Math.random(),
      price: Number(product.price),
    };

    props.handleNewProduct(newProduct);
  }

  return (
    <div className="add-new-product">
      <form onSubmit={handleSubmit}>
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
          <b>Ürün görsel: {product.imageURL}</b>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Bir ürün görsel giriniz!"
            name="imageURL"
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

        <Button>Yeni Ürün Ekle</Button>
      </form>
    </div>
  );
}

export default AddNewProduct;
