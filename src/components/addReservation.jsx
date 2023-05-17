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
      <div className="h-full w-full p-5 md:px-20 bg-cover  bg-no-repeat bg-[url('./images/bgreflect.png')] bg-gray-600 bg-blend-multiply rounded-md">
        <h1 className="p-4 text-xl font-extrabold text-center text-white md:text-2xl">Book for a Reservation</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="text"
              name="motorcycle"
              id="bikename"
              aria-label="Bike Name"
              aria-required="true"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              value={motorcycleName}
              required
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              id="date"
              name="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              aria-label="Date"
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              id="duration"
              name="duration"
              placeholder="Duration"
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              aria-label="Duration"
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              id="city"
              name="city"
              placeholder="City"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              aria-label="City Name"
            />
          </div>
          <button
            type="submit"
            name="Submit Reservation"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit Reservation
          </button>
        </form>
      </div>
    </>
  );
};
export default AddReservation;
