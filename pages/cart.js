import { useState } from 'react';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { useCart } from 'react-use-cart';

const CartPage = () => {
  const { emptyCart, cartTotal, items, updateItemQuantity, removeItem } =
    useCart();
  console.log(items, 'items');

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {items.length === 0 ? (
        <p>
          Your cart is empty. Do some{' '}
          <a
            href="/shop"
            className="text-blue-500 hover:text-green-400 transition font-bold"
          >
            shopping ...
          </a>
        </p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {items.map((item) => (
              <li className="py-4 flex justify-between" key={item.id}>
                <div className=" w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-center object-cover"
                  />
                </div>

                <div className="ml-4 flex flex-col justify-between">
                  <div>
                    <h3 className=" font-medium text-green-400">{item.name}</h3>
                    <p className="mt-1 text-sm text-gray-200">{item.price}</p>
                  </div>
                </div>
                <div>
                  <p className="text-center">
                    {item.quantity} * {item.price}
                  </p>
                  <div className="flex gap-4 mt-4">
                    <FaMinusCircle
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                      className="bg-red-500 p-1 text-3xl rounded-full cursor-pointer"
                    />
                    <FaPlusCircle
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                      className="bg-green-500 p-1 text-3xl rounded-full cursor-pointer"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-center">
                    {parseFloat(`${item.quantity * item.price}`).toFixed(2)}
                  </p>
                  <button
                    className="bg-red-500 px-4 py-2 rounded mt-2"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-end text-lg font-bold">
            <span className="">Total: </span>
            <span className="text-green-400 tracking-wider">
              ${cartTotal.toFixed(2)}
            </span>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => emptyCart()}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
