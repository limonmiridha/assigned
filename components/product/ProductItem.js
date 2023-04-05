import Link from 'next/link';

const ProductItem = ({ product, addItem }) => {
  const userLink = () => {
    return (
      <>
        <Link
          className="bg-blue-500 px-4 py-1 mt-2 rounded-sm"
          style={{ marginRight: '5px', flex: 1 }}
          href={`product/${product.id}`}
        >
          View
        </Link>
        <button
          className="bg-green-500 px-4 py-1 mt-2 rounded-sm"
          style={{ marginLeft: '5px', flex: 1 }}
          onClick={() => addItem(product)}
        >
          Buy
        </button>
      </>
    );
  };

  return (
    <div className="text-white h-[27rem] bg-slate-800 p-6 rounded-lg">
      <img
        className="w-full h-[14rem] object-cover rounded-lg"
        src={product.image}
        alt={product.image}
      />
      <div className="py-2">
        <h5 className="uppercase font-bold text-lg" title={product.title}>
          {product.name}
        </h5>

        <div className="flex justify-between mx-0 my-2">
          <h6 className="text-green-500">${product.price}</h6>
          {product.inStock > 0 ? (
            <h6 className="text-red-500">In Stock: {product.inStock}</h6>
          ) : (
            <h6 className="text-red-500">Out Stock</h6>
          )}
        </div>

        <p>{product.description}</p>

        <div className="flex text-center mx-0">{userLink()}</div>
      </div>
    </div>
  );
};

export default ProductItem;
