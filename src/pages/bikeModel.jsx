import React from 'react';
import Reservation from './reservation';
// import ButtonX from '../components/button';
// import BikeSwiper from '../components/bikeSwiper';
// import Bikedetails from '../components/BikeDetails';

export default function BikeModel() {
  return (
    <div className="flex flex-col items-center justify-center pt-5">
      {/* <BikeSwiper /> */}

      {/* <Bikedetails
        bikeData={{
          name: 'SEH-BIKE 976',
          price: 4356,
          financeFee: 768,
          purchaseFee: 2768,
          totalAmount: 9768,
          duration: '45Hr',
          image: './images/black1.png',
          imagecolor: 'https://podprint.com/wp-content/uploads/2020/08/ColorWheel_Blank.png',
          configurationOptions: ['Option 1', 'Option 2', 'Option 3'],
        }}
      /> */}
      <Reservation />

    </div>
  );
}
