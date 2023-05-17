import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// conv to arrow
// pass props to component
// render component in main page and details pages

function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <button
        className={`hamburger-button ${isMobileMenuOpen ? 'open': ''}`}
        onClick={handleMobileMenuToggle}
        aria-label="Toggle mobile menu"
      >
       <div className="line"></div>
       <div className="line"></div>
       <div className="line"></div>
      </button>
      <aside
        id="default-sidebar"
        className={`top-0 left-0 z-40 h-screen md:translate-x-0 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Sidebar"
      >
        <div className=" px-3 py-4 overflow-y-hidden border border-gray-200 flex flex-col">
          <div className="aside-img">
            <img src="https://res.cloudinary.com/denphvygd/image/upload/v1684353954/black1_p0m98i.png" alt="SEH bikes" className="mb-9" />
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
              </Link>
            </li>
            <li className="font-bold rounded-md hover:text-white hover:bg-green-400 side-links">
              <Link to="/reservations" className="p-3">
                <i className="fa-solid fa-inbox" />
                <span className="flex-1 ml-3 whitespace-nowrap">My Reservations</span>
              </Link>
            </li>
            <li className="font-bold rounded-md hover:text-white hover:bg-green-400 side-links">
              <Link to="/signin" className="p-3">
                <i className="fa-solid fa-arrow-right-to-bracket" />
                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </Link>
            </li>
          </ul>
          <div className="text-center aside-links flex flex-col">
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
    </nav>
  );
}
export default Sidebar;
