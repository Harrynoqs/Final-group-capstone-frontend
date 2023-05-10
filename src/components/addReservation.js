import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../redux/reservations/reservations';

const AddReservation = () => {
  const [date, setDate] = useState(null);
  const [city, setCity] = useState('');
}