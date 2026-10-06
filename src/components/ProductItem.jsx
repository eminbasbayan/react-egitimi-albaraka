import './ProductItem.css';

function ProductItem(props) {
  function handleTitleChange() {
    props.titleFunction('Şapka');
  }

  return (
    <div className="product-item">
      <img src={props.imageUrl} alt="Çanta Görseli" />

      <div className="product-item-info">
        <b className="product-item-title">{props.title}</b>
        <span>{props.price}₺</span>
        <button onClick={handleTitleChange}>Title Değiştir</button>
      </div>
    </div>
  );
}

export default ProductItem;
