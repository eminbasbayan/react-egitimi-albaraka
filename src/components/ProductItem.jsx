import './ProductItem.css';

function ProductItem(props) {
  console.log(props);
  
  return (
    <div className="product-item">
      <img src={props.imageUrl} alt="Çanta Görseli" />

      <div className="product-item-info">
        <b>{props.title}</b>
        <span>{props.price}₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
