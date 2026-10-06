import { productsData } from '../data/productsData';
import ProductItem from './ProductItem';
import "./Products.css";

function Products() {
  return (
    <div className="products">
      <h2>Products Component</h2>

      <div className="product-items">
        {productsData.map((product) => {
          return (
            <ProductItem
              key={product.id}
              imageUrl={product.imageURL}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
