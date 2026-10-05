function ProductItem() {
  return (
    <div className="product-item" style={{
        backgroundColor: "red",
        width: "250px"
    }}>
      <img
        src="https://cdn.pixabay.com/photo/2016/11/23/18/12/bag-1854148_640.jpg"
        alt="Çanta Görseli"
        style={{
            width: "100%"
        }}
      />

      <div className="product-item-info">
        <b>Çanta</b>
        <span>1000₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
