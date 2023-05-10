import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleMotorcycle } from '../redux/motorcycles/details';
import { addReservation } from '../redux/reservations/reservations';

const AddReservation = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [date, setDate] = useState(null);
  const [city, setCity] = useState('');
  const motorcycleId = location.state?.id;
  
  const createNewReservation = (date, city, motorcycleId) => ({
    date,
    city,
    motorcycleId
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = createNewReservation(date, city, motorcycleId);
    dispatch(addReservation(reservation)).unwrap();
    setDate(null);
    setCity('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input placeholder="City" type="text" name="City" value={city} onChange={(e) => setCity(e.target.value)} />
      </form>
    </div>
  )
}