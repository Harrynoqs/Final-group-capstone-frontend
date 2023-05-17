import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner';
import Sidebar from './components/sidebar';
// import Reservations from './components/reservations';
// import AddReservation from './components/addReservation';
// import Login from './components/login';
import Bikedetails from './components/BikeDetails';
// App component
function App() {
  // State to track loading status
  const [Loading, setLoading] = useState(false);
  // Use effect hook to set loading state after 5 seconds
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen sm:flex-row">
        <Sidebar />
        <div className="flex-1 p-2 border-2 border-gray-200 border-dashed rounded-lg md:p-4 md:ml-64 dark:border-gray-700">
          {
            Loading ? (
              // Show loading spinner if loading is true
              <div className="relative left-[50%] top-80 md:top-[50%] translate-x-[-50%] translate-y-[-50%]  h-screen flex justify-center items-center">
                <Triangle
                  height="80"
                  width="80"
                  color="#008000"
                  ariaLabel="triangle-loading"
                  visible
                />
              </div>
            ) : (
              // Show reservations component if loading is false
              <Routes>
                <Route
                  index
                  element={(
                    <Bikedetails
                      bikeData={{
                        name: 'SEH-BIKE 976',
                        price: 4356,
                        financeFee: 768,
                        purchaseFee: 2768,
                        totalAmount: 9768,
                        duration: '45Hr',
                        image: 'https://aboutmansmedia.s3.eu-west-2.amazonaws.com/wp-content/uploads/2019/12/21213502/Best-motorcycles-3.jpg',
                        imagecolor: 'https://podprint.com/wp-content/uploads/2020/08/ColorWheel_Blank.png',
                        configurationOptions: ['Option 1', 'Option 2', 'Option 3'],
                      }}
                    />
)}
                />
              </Routes>
            )
          }
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
