import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiShoppingBag, FiStar } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const exampleProduct = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
  rating: { rate: 3.9, count: 120 },
};

const ProductDetails = () => {
  const [product, setProduct] = useState(exampleProduct);

  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  const rating = product.rating?.rate ?? 0;
  const reviewCount = product.rating?.count ?? 0;
  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  return (
    <section className="product-details-page mx-auto max-w-6xl">
      <nav
        aria-label="Gezinme yolu"
        className="mb-6 flex items-center gap-2 text-sm text-slate-500 sm:mb-8"
      >
        <Link
          to="/products"
          className="inline-flex items-center gap-2 transition hover:text-indigo-700"
        >
          <FiArrowLeft aria-hidden="true" />
          Ürünler
        </Link>
        <span aria-hidden="true">/</span>
        <span className="truncate text-slate-900">Ürün detayı</span>
      </nav>

      <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
        <div className="flex min-h-80 items-center justify-center bg-slate-100 p-10 sm:min-h-120 sm:p-16 lg:min-h-150">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-72 w-full max-w-md object-contain mix-blend-multiply sm:max-h-96 lg:max-h-110"
          />
        </div>

        <div className="flex flex-col p-6 sm:p-10 lg:justify-center lg:p-12">
          <span className="mb-4 w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-700">
            {product.category}
          </span>

          <h1 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            {product.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
            <div
              className="flex items-center gap-1 text-amber-500"
              aria-hidden="true"
            >
              {Array.from({ length: 5 }, (_, index) => (
                <FiStar
                  key={index}
                  className="h-4 w-4"
                  fill={index < Math.round(rating) ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            <span className="font-semibold text-slate-900">
              {rating.toFixed(1)} / 5
            </span>
            <span className="text-slate-500">
              ({reviewCount} değerlendirme)
            </span>
          </div>

          <div className="my-8 border-t border-slate-200" />

          <p className="text-4xl font-bold tracking-tight text-slate-900">
            {price}
          </p>

          <div className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Ürün hakkında
            </h2>
            <p className="mt-3 max-w-prose leading-7 text-slate-600">
              {product.description}
            </p>
          </div>

          <button
            type="button"
            className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-indigo-700 px-6 py-4 font-semibold text-white shadow-sm transition hover:bg-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
          >
            <FiShoppingBag aria-hidden="true" className="h-5 w-5" />
            Sepete ekle
          </button>

          <p className="mt-5 text-center text-xs text-slate-400">
            Ürün kodu: #{product.id}
          </p>
        </div>
      </article>
    </section>
  );
};

export default ProductDetails;
