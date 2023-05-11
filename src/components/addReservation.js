import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addReservation } from '../redux/reservations/reservations';

const AddReservation = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [date, setDate] = useState(null);
  const [city, setCity] = useState('');
  const [duration, setDuration] = useState('');
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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="motorcycle" value={motorcycleName}/>
        <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input placeholder="City" type="text" name="City" value={city} onChange={(e) => setCity(e.target.value)} />
      </form>
    </div>
  );
};

export default AddReservation;
