import React from 'react';

export default function Reservations() {
  const reservationData = [{
    id: 1,
    name: 'SEH-BIKE 976',
    rating: '4/5',
    totalAmount: 9768,
    description: 'The idiosyncratic appearance, coupled with its cutting-edge performance',
    image: 'https://aboutmansmedia.s3.eu-west-2.amazonaws.com/wp-content/uploads/2019/12/21213502/Best-motorcycles-3.jpg',
    btntext: 'Reserve It',
  },
  {
    id: 2,
    name: 'SEH-BIKE 976',
    rating: '4/5',
    totalAmount: 9768,
    description: 'The idiosyncratic appearance, coupled with its cutting-edge performance',
    image: 'https://emozzy.com/wp-content/uploads/2020/11/Top-10-Honda-Cruiser-Bikes-You-Can-Buy-at-Reasonable-Price-5.jpg',
    btntext: 'Reserve It',
  },
  {
    id: 3,
    name: 'SEH-BIKE 976',
    rating: '4/5',
    totalAmount: 9768,
    description: 'The idiosyncratic appearance, coupled with its cutting-edge performance',
    image: 'https://manofmany.com/wp-content/uploads/2020/06/Best-Electric-Motorcycles-Damon-Hypersport-Premier.jpg',
    btntext: 'Reserve It',
  },
  {
    id: 4,
    name: 'SEH-BIKE 976',
    rating: '4/5',
    totalAmount: 9768,
    description: 'The idiosyncratic appearance, coupled with its cutting-edge performance',
    image: 'https://static0.hotcarsimages.com/wordpress/wp-content/uploads/2018/06/2BM1.jpg',
    btntext: 'Reserve It',
  },
  {
    id: 5,
    name: 'SEH-BIKE 976',
    rating: '4/5',
    totalAmount: 9768,
    description: 'The idiosyncratic appearance, coupled with its cutting-edge performance',
    image: 'https://wallup.net/wp-content/uploads/2019/09/927111-mv-agusta-superbike-bike-muscle-motorbike-motorcycle.jpg',
    btntext: 'Reserve It',
  },
  {
    id: 6,
    name: 'SEH-BIKE 976',
    rating: '4/5',
    totalAmount: 9768,
    description: 'The idiosyncratic appearance, coupled with its cutting-edge performance',
    image: 'https://static0.hotcarsimages.com/wordpress/wp-content/uploads/2020/08/bucherer-1-e1598231194611.jpg',
    btntext: 'Reserve It',
  },
  ];
  return (
    <>

      <h1 className="pb-5 text-3xl font-bold text-center text-green-400">Reservation List</h1>
      <div className="grid justify-center grid-cols-1 grid-rows-1 gap-4 md:grid-cols-3 md:grid-rows-auto">
        {reservationData.map((slideContent) => (

          <div key={slideContent.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/" className="flex justify-center i-tems-center">
              <img className="pb-2 rounded-t-lg" src={slideContent.image} alt="product" />
            </a>
            <div className="px-5 pb-5">
              <a href="/">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{slideContent.name}</h5>
                <p className="text-sm tracking-tight text-gray-900 font-md dark:text-white">{slideContent.description}</p>
              </a>
              <div className="flex items-center mt-2 mb-2">
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{slideContent.rating}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  $
                  {slideContent.totalAmount}
                </span>
                <a href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{slideContent.btntext}</a>
              </div>
            </div>
          </div>

        ))}
      </div>

    </>
  );
}
