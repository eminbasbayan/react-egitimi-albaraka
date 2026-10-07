import './ProductItem.css';

function ProductItem(props) {
  function handleDeleteItem() {
    props.setProducts(props.id);
  }

  return (
    <div className="product-item">
      <img src={props.imageURL} alt="Çanta Görseli" />

      <div className="product-item-info">
        <b className="product-item-title">{props.title}</b>
        <span>{props.price}₺</span>
        <button onClick={handleDeleteItem}>Ürünü Sil</button>
      </div>
    </div>
  );
}

export default ProductItem;
