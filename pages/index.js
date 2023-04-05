import Head from 'next/head';
import { useState } from 'react';
import ProductItem from '../components/product/ProductItem';
import { productItems } from '../data/productData';
import Slider from '../components/Slider';
import Link from 'next/link';
import { useCart } from 'react-use-cart';

const Home = () => {
  const [products, setProducts] = useState(productItems);
  const { addItem } = useCart();

  return (
    <div className="container mx-auto">
      <Head>
        <title>Home Page</title>
      </Head>

      <Slider products={productItems} />

      <div className="products">
        {productItems.length === 0 ? (
          <h2>No Products</h2>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productItems.slice(0, 8).map((product) => (
              <ProductItem
                key={product._id}
                product={product}
                addItem={addItem}
              />
            ))}
          </div>
        )}
      </div>

      <Link
        className="bg-green-500 px-4 py-2 my-4 text-white rounded block w-44 text-center font-bold transition hover:text-slate-700 mx-auto"
        href="/shop"
      >
        All Products
      </Link>
    </div>
  );
};

export default Home;
