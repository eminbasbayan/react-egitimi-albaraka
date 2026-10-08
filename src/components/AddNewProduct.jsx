import { useState } from 'react';
import './AddNewProduct.css';
import Button from './UI/Button';
import ProductInput from './ProductInput';

const productInputs = [
  {
    title: 'Ürün İsmi',
    name: 'title',
    type: 'text',
    placeholder: 'Bir ürün ismi giriniz!',
  },
  {
    title: 'Ürün Görseli',
    name: 'imageURL',
    type: 'text',
    placeholder: 'Bir ürün görseli giriniz!',
  },
  {
    title: 'Ürün Fiyatı',
    name: 'price',
    type: 'number',
    placeholder: 'Bir ürün fiyatı giriniz!',
  },
];

function AddNewProduct(props) {
  const [product, setProduct] = useState({
    title: '',
    imageURL: '',
    price: '',
  });

  console.log(product);

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
      image: product.imageURL,
    };

    props.handleNewProduct(newProduct);

    setProduct({
      title: '',
      imageURL: '',
      price: '',
    });
  }

  return (
    <div className="add-new-product">
      <form onSubmit={handleSubmit}>
        {productInputs.map((item) => (
          <ProductInput
            type={item.type}
            handleChange={handleChange}
            placeholder={item.placeholder}
            title={item.title}
            name={item.name}
            key={item.name}
            value={product[item.name]}
          />
        ))}

        <Button>Yeni Ürün Ekle</Button>
      </form>
    </div>
  );
}

export default AddNewProduct;
