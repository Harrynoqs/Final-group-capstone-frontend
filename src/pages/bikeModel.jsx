import React from "react";
import ButtonX from "../components/button";
import BikeSwiper from "../components/bikeSwiper";
import Bikedetails from "../components/BikeDetails";
export default function BikeModel(){
  return(
   <div className="flex flex-col items-center justify-center pt-5">
   <BikeSwiper />
   {/* <Bikedetails /> */}
   </div>
  );
}