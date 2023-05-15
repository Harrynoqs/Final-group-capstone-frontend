import React from "react";
import { useMediaQuery } from "react-responsive";
 function Sidebar() {
   const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
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
              ></path>
            </svg>
          </button>
          <div className="text-center w-max flex flex-row justify-center items-center font-bold pl-[21vw]">
            <h2 className="text-2xl text-green-400">
              SEH-BIKES <sub className="text-sm">PLc</sub>
            </h2>
          </div>
        </div>
      )}
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isMobile ? "-translate-x-full" : "translate-x-0"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-screen px-3 py-4 overflow-y-hidden bg-gray-200 dark:bg-gray-800">
          <div>
            <img src="./images/black1.png" alt="SEH bikes" className="mb-9" />
          </div>
          <ul className="h-full space-y-1 font-medium ">
          <li className="p-3 font-bold border rounded-md hover:text-white hover:bg-green-500">
   <a href="">
     <i className="fa-solid fa-motorcycle "></i>
      <span className="ml-3">Bike Models</span>
   </a>
</li>
<li className="p-3 font-bold border rounded-md hover:text-white hover:bg-green-500">
   <a href="">
   <i className="fa-solid fa-shop"></i>
      <span className="flex-1 ml-3 whitespace-nowrap">Reservation</span>
      <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-green-800 bg-green-200 rounded-full dark:bg-green-700 dark:text-green-300">Pro</span>
   </a>
</li>
<li className="p-3 font-bold border rounded-md hover:text-white hover:bg-green-500">
   <a href="">
   <i className="fa-solid fa-inbox"></i>
      <span className="flex-1 ml-3 whitespace-nowrap">My Reservations</span>
      <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-green-100 rounded-full dark:bg-blue-900 dark:text-green-300">3</span>
   </a>
</li>
<li className="p-3 font-bold border rounded-md hover:text-white hover:bg-green-500">
   <a href="">
   <i className="fa-solid fa-plus"></i>
      <span className="flex-1 ml-3 whitespace-nowrap">Add Bikes</span>
   </a>
</li>
<li className="p-3 font-bold border rounded-md hover:text-white hover:bg-green-500">
   <a href="">
   <i className="fa-solid fa-arrow-right-to-bracket"></i>
      <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
   </a>
</li>
<li className="p-3 font-bold border rounded-md hover:text-white hover:bg-green-500">
   <a href="">
   <i className="fa-solid fa-id-card"></i>
      <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
   </a>
</li>
<div className="text-center pt-28 md:pt-24">
      <ul className="relative flex flex-row gap-2 left-2">
      <li className="w-9 h-9"><a href="www.facebook.com"><i className="text-2xl fa-brands fa-facebook"></i></a></li>
      <li className="w-9 h-9"><a href="www.linkedin.com"><i className="text-2xl fa-brands fa-linkedin"></i></a></li>
      <li className="w-9 h-9"><a href="www.twitter.com"><i className="text-2xl fa-brands fa-twitter"></i></a></li>
      <li className="w-9 h-9"><a href="www.amazin.com"><i className="text-2xl fa-brands fa-amazon"></i></a></li>
      <li className="w-9 h-9"><a href="www.google.com"><i className="text-2xl fa-brands fa-google"></i></a></li>
      </ul>
      <span className="text-sm font-bold text-yellow-400">copyright 2023 SEH-BIKES Plc
</span>
</div>
          </ul>
        </div>
      </aside>
    </>
  );
}
 export default Sidebar;