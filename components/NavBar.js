import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { useCart } from 'react-use-cart';

function Navbar() {
  const { totalUniqueItems } = useCart();
  const [totalNumberOfItems, setTotalNumberOfItems] = useState(0);
  useEffect(() => {
    setTotalNumberOfItems(totalUniqueItems);
  }, [totalUniqueItems]);

  return (
    <nav className="bg-gray-900 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold">
              My Store
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/login"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
              <Link
                href="/shop"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Shop
              </Link>
              <Link
                href="/cart"
                className="relative text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <div className="absolute -top-2 -right-2 bg-green-600 w-6 h-6 rounded-full text-center">
                  {totalNumberOfItems}
                </div>
                Cart
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-800 flex flex-col items-center justify-center px-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
              <div>-</div>
              <div>-</div>
              <div>-</div>
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Shop
          </Link>
          <Link
            href="/cart"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
