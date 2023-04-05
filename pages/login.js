import React from 'react';
import Link from 'next/link';

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-700">
      <div className="max-w-md w-full px-6 py-8 bg-slate-800 shadow-md overflow-hidden sm:rounded-lg">
        <div className="text-white">
          <h2 className="text-center text-3xl leading-9 font-extrabold ">
            Log in to your account
          </h2>
          <p className="mt-2 text-center text-sm leading-5 ">
            Or{' '}
            <Link href="/register">
              <span className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                create a new account
              </span>
            </Link>
          </p>
        </div>
        <form className="mt-8" action="#" method="POST">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <input
                aria-label="Email address"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Email address"
              />
            </div>
            <div className="-mt-px">
              <input
                aria-label="Password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="form-checkbox h-4 w-4  transition duration-150 ease-in-out"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm leading-5 text-white"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm leading-5">
              <Link
                href="/forgot-password"
                className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
