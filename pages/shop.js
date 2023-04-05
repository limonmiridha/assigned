import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import ProductItem from '../components/product/ProductItem';
import { productItems } from '../data/productData';

const shop = () => {
  const [products, setProducts] = useState(productItems);
  const { addItem } = useCart();

  return (
    <div>
      <div className="container mx-auto">
        {productItems.length === 0 ? (
          <h2>No Products</h2>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductItem
                key={product._id}
                product={product}
                addItem={addItem}
                // handleCheck={handleCheck}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default shop;
