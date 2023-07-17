import React from "react";

const ProductCard = () => {
  return (
    <div
      style={{ maxWidth: "13rem" }}
      class='bg-white border border-gray-200 rounded-lg shadow mb-4'
    >
      <a href='#'>
        <img
          class='rounded-t-lg'
          src='/images/book.jpg'
          style={{ maxWidth: "13rem" }}
          alt='Product Image not loaded'
        />
      </a>
      <div class='p-3'>
        <div className='flex justify-between items-center mb-2'>
          <h5 class='text-xl font-light tracking-tight text-black-900 dark:text-black'>
            Holy Bible
          </h5>
          <div>
            <h1 className='font-light text-blue-700 text-xl'>$45</h1>
          </div>
        </div>
        <p class='mb-3 font-light text-gray-700 text-sm dark:text-black-400'>
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href='#'
          class='inline-flex items-center px-3 py-2 text-xs font-light uppercase text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Add to Cart
          <svg
            class='w-3.5 h-3.5 ml-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 5h12m0 0L9 1m4 4L9 9'
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
