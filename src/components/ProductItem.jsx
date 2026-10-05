import './ProductItem.css';

function ProductItem() {
  return (
    <div className="product-item">
      <img
        src="https://cdn.pixabay.com/photo/2016/11/23/18/12/bag-1854148_640.jpg"
        alt="Çanta Görseli"
      />

      <div className="product-item-info">
        <b>Çanta</b>
        <span>1000₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
