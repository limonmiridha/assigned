import Head from 'next/head';
import { productItems } from '../../data/productData';
import { useRouter } from 'next/router';
import { useCart } from 'react-use-cart';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const DetailProduct = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const { addItem } = useCart();
  const router = useRouter();
  const { id } = router.query;
  const product = productItems.find((p) => p.id == id);
  // console.log(product, 'product');
  useEffect(() => {
    setProducts(product);
  }, [products]);

  return (
    <>
      {products ? (
        <div className="flex gap-8">
          <div className="w-full max-h-[24rem]">
            <div className="mx-0" style={{ cursor: 'pointer' }}>
              <Image
                height={500}
                width={500}
                src={products.image}
                className="h-[32rem] w-full object-cover"
                alt={products.image}
              />
            </div>
          </div>
          <div className="text-white mt-3">
            <h2 className="text-3xl text-green-400 font-bold uppercase">
              {products.name}
            </h2>
            <h5 className="text-yellow-400 text-xl my-2">${products.price}</h5>

            <div className="mt-8 text-lg">
              {products.inStock > 0 ? (
                <h6 className="text-red-500">In Stock: {products.inStock}</h6>
              ) : (
                <h6 className="text-red-500">Out Stock</h6>
              )}

              <h6 className="text-green-500">Sold: {products.sold}</h6>
            </div>

            <div className="my-2">{products.description}</div>
            <div className="my-2 w-1/2 text-justify">{products.content}</div>

            <button
              onClick={() => addItem(product)}
              type="button"
              className="bg-green-500 border border-green-500 my-3 px-6 py-2 rounded font-bold hover:bg-transparent"
            >
              Buy
            </button>
          </div>
        </div>
      ) : (
        'Loading'
      )}
    </>
  );
};

export default DetailProduct;
