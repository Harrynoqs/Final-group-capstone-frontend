import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addReservation } from '../redux/reservations/reservations';

const AddReservation = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [date, setDate] = useState(null);
  const [city, setCity] = useState('');
  const [duration, setDuration] = useState(0);
  const motorcycleId = location.state?.id;
  const motorcycleName = location.state?.name;

  const createNewReservation = (date, city, motorcycleId) => ({
    date,
    city,
    duration,
    motorcycleId,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = createNewReservation(date, city, motorcycleId);
    dispatch(addReservation(reservation)).unwrap();
    setDate(null);
    setCity('');
  };

  return (
    <>
    <div className="p-5 md:px-20">
      <h1 className="p-4 text-xl font-extrabold text-center text-green-600 md:text-2xl">Book for a Reservation</h1>
      <form onSubmit={handleSubmit} > 
      <div class="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium font-semibold text-gray-900 dark:text-white">Bike Name</label>
              <input type="text" name="motorcycle" id="bikename" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={motorcycleName} />
      </div>
      <div class="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium font-semibold text-gray-900 dark:text-white">Date</label>
        <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
      <div class="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium font-semibold text-gray-900 dark:text-white">Number</label>
        <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Duration" type="number" name="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </div>
      <div class="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium font-semibold text-gray-900 dark:text-white">City Name</label>
        <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  placeholder="City" type="text" name="City" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <button type="submit" name="Submit Reservation" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Reservation</button>
      </form>
    </div>
    </>
  );
};

export default AddReservation;
