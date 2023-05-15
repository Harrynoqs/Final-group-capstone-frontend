import React from "react";

export default function Bikedetails(){
return(

  <>
  <div className="grid grid-cols-1 grid-rows-4 md:grid-rows-1 md:grid-cols-4 ">
    <div className="items-center justify-center row-span-3 md:col-span-3 text-ceter border-r-black 2 border-">
      <img src="./images/black1.png" alt="" />
    </div>
    <div className="border-black border-2-l w-max">
      <h2 className="text-xl text-green-500"> SEH-BIKE 976</h2>
      <p className="text-sm">$4356 deposit for SEH-Bike purchase
      </p>
      <ul className="text-white even:bg-green-400 ">
        <li><span>Finance Fee</span><span>$768</span></li>
        <li><span>Option to purchase Fee</span><span>$2768</span></li>
        <li><span>Total Amount payable</span><span>$9768</span></li>
        <li><span>Duration</span><span> 45Hr</span></li>  
      </ul>
      
    </div>
  </div>
  </>
);
};
