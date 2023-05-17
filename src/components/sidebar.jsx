import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

// conv to arrow
// pass props to component
// render component in main page and details pages

function Sidebar() {
  const isMobile = useMediaQuery({ query: '(max-width: 650px)' });
  return (
    <>
      {isMobile && (
        <>
        
        </>
      )}
      <aside
        id="default-sidebar"
        className={`top-0 left-0 z-40 h-screen sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className=" px-3 py-4 overflow-y-hidden border border-gray-200 flex flex-col">
          <div>
            <img src="./images/black1.png" alt="SEH bikes" className="mb-9" />
          </div>
          <ul className="h-full space-y-1 font-medium ">
            <li className="font-bold rounded-md hover:text-white hover:bg-green-400 side-links">
              <Link to="/" className="p-3">
                <i className="fa-solid fa-motorcycle " />
                <span className="ml-3">Bike Models</span>
              </Link>
            </li>
            <li className="font-bold rounded-md hover:text-white hover:bg-green-400 side-links">
              <Link to="/add-motorcycle" className="p-3">
                <i className="fa-solid fa-plus" />
                <span className="flex-1 ml-3 whitespace-nowrap">Add Bikes</span>
              </Link>
            </li>
            <li className="font-bold rounded-md hover:text-white hover:bg-green-400 side-links">
              <Link to="/add-reservations" className="p-3">
                <i className="fa-solid fa-shop" />
                <span className="flex-1 ml-3 whitespace-nowrap">Add Reservation</span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-green-800 bg-green-200 rounded-full dark:bg-green-700 dark:text-green-300">Pro</span>
              </Link>
            </li>
            <li className="font-bold rounded-md hover:text-white hover:bg-green-400 side-links">
              <Link to="/reservations" className="p-3">
                <i className="fa-solid fa-inbox" />
                <span className="flex-1 ml-3 whitespace-nowrap">My Reservations</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-green-100 rounded-full dark:bg-blue-900 dark:text-green-300">3</span>
              </Link>
            </li>
            <li className="font-bold rounded-md hover:text-white hover:bg-green-400 side-links">
              <Link to="/signin" className="p-3">
                <i className="fa-solid fa-arrow-right-to-bracket" />
                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </Link>
            </li>
          </ul>
          <div className="text-center aside-links flex align-center flex-col">
              <ul className="relative flex flex-row gap-2 left-2 align-center justify-center">
                <li className="w-6 h-9"><a href="www.facebook.com"><i className="text-xl fa-brands fa-facebook" role="button" aria-label="facebook" /></a></li>
                <li className="w-6 h-9"><a href="www.linkedin.com"><i className="text-xl fa-brands fa-vimeo" role="button" aria-label="facebook" /></a></li>
                <li className="w-6 h-9"><a href="www.twitter.com"><i className="text-xl fa-brands fa-twitter" role="button" aria-label="facebook" /></a></li>
                <li className="w-6 h-9"><a href="www.amazin.com"><i className="text-xl fa-brands fa-amazon" role="button" aria-label="facebook" /></a></li>
                <li className="w-6 h-9"><a href="www.google.com"><i className="text-xl fa-brands fa-pinterest" role="button" aria-label="facebook" /></a></li>
              </ul>
              <span className="copyright-text">
                Copyright 2023 SEH-BIKES PLC
              </span>
           </div>
        </div>
      </aside>
    </>
  );
}
export default Sidebar;
