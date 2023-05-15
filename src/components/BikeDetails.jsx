import React, { useState } from 'react';
 
// when you use the  Bikedetails  component, you can pass dynamic data to it like this:

// <Bikedetails
//   bikeData={{
//     name: 'SEH-BIKE 976',
//     price: 4356,
//     financeFee: 768,
//     purchaseFee: 2768,
//     totalAmount: 9768,
//     duration: '45Hr',
//     image: './images/black1.png',
//     configurationOptions: ['Option 1', 'Option 2', 'Option 3'],
//   }}
// />
 export default function Bikedetails({ bikeData }) {
  const [isConfigOpen, setIsConfigOpen] = useState(false);
   const handleConfigClick = () => {
    setIsConfigOpen(prevState => !prevState);
    
  };
   return (
    <div className="grid grid-cols-1 grid-rows-4 md:grid-rows-1 md:grid-cols-4">
      <div className="flex items-center justify-center row-span-1 text-center border-2 border-b-black md:border-none md:col-span-3">
        <img src={bikeData.image} alt={bikeData.name} className="w-full h-full" />
      </div>
      <div className="w-full pt-3 border-2 md:border-l-black sm:pt-2 md:pl-2">
        <h2 className="w-full text-3xl font-semibold text-green-500">{bikeData.name}</h2>
        <p className="pb-4 text-sm font-medium">${bikeData.price} deposit for {bikeData.name} purchase</p>
        <ul className="font-semibold bg-green-200 rounded-md even:bg-white">
          <li className="flex items-center justify-between p-3 text-sm rounded-md border-2-">
            <span>Finance Fee</span>
            <span>${bikeData.financeFee}</span>
          </li>
          <li className="flex items-center justify-between p-3 text-sm rounded-md border-2-">
            <span>Option to purchase Fee</span>
            <span>${bikeData.purchaseFee}</span>
          </li>
          <li className="flex items-center justify-between p-3 text-sm rounded-md border-2-">
            <span>Total Amount payable</span>
            <span>${bikeData.totalAmount}</span>
          </li>
          <li className="flex items-center justify-between p-3 text-sm rounded-md border-2-">
            <span>Duration</span>
            <span>{bikeData.duration}</span>
          </li>
        </ul>
        <button className="flex items-center justify-between w-full p-2 bg-green-500 border rounded-md mt-28" onClick={handleConfigClick}>
          <span className="font-bold text-center text-white text-md">Configuration</span>
          <i className={`text-xl fa-solid fa-gear ${isConfigOpen ? 'rotate-180' : ''}`}></i>
        </button>
        {isConfigOpen && (
          <div className="mt-4 border-2 border-gray-300 rounded">
            <p className="p-2">Configuration Options:</p>
            <ul className="p-2 font-light">
              {bikeData.configurationOptions.map(option => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
