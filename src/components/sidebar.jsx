import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

function Sidebar() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <>
      {isMobile && (
      <div className="flex flex-row md:hidden ">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-green-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
        <div className="text-center w-max flex flex-row justify-center items-center font-bold pl-[21vw]">
          <h2 className="text-2xl text-green-400">
            SEH-BIKES
            {' '}
            <sub className="text-sm">PLc</sub>
          </h2>
        </div>
      </div>
      )}
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isMobile ? '-translate-x-full' : 'translate-x-0'
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-screen px-3 py-4 overflow-y-hidden bg-gray-200 dark:bg-gray-800">
          <div>
            <img src="./images/black1.png" alt="SEH bikes" className="mb-9" />
          </div>
          <ul className="h-full space-y-1 font-medium ">
            <li className="p-3 font-bold border rounded-md hover:text-white hover:bg-green-500">
              <Link to="/">
                <i className="fa-solid fa-motorcycle " />
                <span className="ml-3">Bike Models</span>
              </Link>
            </li>
            <li className="p-3 font-bold border rounded-md hover:text-white hover:bg-green-500">
              <Link to="/addreservation">
                <i className="fa-solid fa-shop" />
                <span className="flex-1 ml-3 whitespace-nowrap">Reservation</span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-green-800 bg-green-200 rounded-full dark:bg-green-700 dark:text-green-300">Pro</span>
              </Link>
            </li>
            <li className="p-3 font-bold border rounded-md hover:text-white hover:bg-green-500">
              <Link to="/reservations">
                <i className="fa-solid fa-inbox" />
                <span className="flex-1 ml-3 whitespace-nowrap">My Reservations</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-green-100 rounded-full dark:bg-blue-900 dark:text-green-300">3</span>
              </Link>
            </li>
            <li className="p-3 font-bold border rounded-md hover:text-white hover:bg-green-500">
              <Link href="/">
                <i className="fa-solid fa-plus" />
                <span className="flex-1 ml-3 whitespace-nowrap">Add Bikes</span>
              </Link>
            </li>
            <li className="p-3 font-bold border rounded-md hover:text-white hover:bg-green-500">
              <Link to="/signin">
                <i className="fa-solid fa-arrow-right-to-bracket" />
                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </Link>
            </li>
            <li className="p-3 font-bold border rounded-md hover:text-white hover:bg-green-500">
              <Link to="/signup">
                <i className="fa-solid fa-id-card" />
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </Link>
            </li>
            <div className="text-center pt-28 md:pt-24">
              <ul className="relative flex flex-row gap-2 left-2">
                <li className="w-9 h-9"><a href="www.facebook.com"><i className="text-2xl fa-brands fa-facebook" role="button" aria-label="facebook" /></a></li>
                <li className="w-9 h-9"><a href="www.linkedin.com"><i className="text-2xl fa-brands fa-linkedin" role="button" aria-label="facebook" /></a></li>
                <li className="w-9 h-9"><a href="www.twitter.com"><i className="text-2xl fa-brands fa-twitter" role="button" aria-label="facebook" /></a></li>
                <li className="w-9 h-9"><a href="www.amazin.com"><i className="text-2xl fa-brands fa-amazon" role="button" aria-label="facebook" /></a></li>
                <li className="w-9 h-9"><a href="www.google.com"><i className="text-2xl fa-brands fa-google" role="button" aria-label="facebook" /></a></li>
              </ul>
              <span className="text-sm font-bold text-yellow-400">
                copyright 2023 SEH-BIKES Plc
              </span>
            </div>
          </ul>
        </div>
      </aside>
    </>
  );
}
export default Sidebar;
