import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '../redux/reservations/reservations';
import { fetchUsers } from '../redux/users/fetch';
import { getMotorcycles } from '../redux/motorcycles/motorcycles';

const AddReservation = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const selectedBikeId = location.state?.id;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  const [date, setDate] = useState(null);
  const [city, setCity] = useState('');
  const [duration, setDuration] = useState(0);
  const [motorcycleId, setMotorcycleId] = useState(selectedBikeId ? selectedBikeId : '');
  const [user, setUser] = useState('');
  const [notice, setNotice] = useState('');

  const users = useSelector((state) => state.allUsers[0]);

  useEffect(() => {
    setUser(users?.find((user) => user.name === JSON.parse(localStorage.getItem('state'))[0]) || 0)
  }, [users]);

  console.log(user);

  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(0);
  // dropdown with options -> names of all motorcycles
  let bikeOptions = [];

  const createNewReservation = (date, city, duration, motorcycleId, userId) => ({
    date,
    city,
    duration,
    motorcycleId,
    userId
  });

  const motorcycles = useSelector((state) => state.motorcycle);
  if (motorcycleId === '') {
    motorcycles.forEach((motorcycle) => {
      bikeOptions.push(motorcycle);
    })
  }

  useEffect(() => {
    if (motorcycleId === '') {
      dispatch(getMotorcycles());
    }
  }, [dispatch]);

  useEffect(() => {
    setOptions(bikeOptions);
  }, [motorcycles]);
  

  console.log(options);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (motorcycleId === '') {
      setNotice('Error trying to submit request. Please try again.')
    }
    else {
      const reservation = createNewReservation(date, city, motorcycleId, user.id);
      dispatch(addReservation(reservation));
      setDate(null);
      setCity('');
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        {options && options.length > 0 ? 
          <select value={motorcycleId} onChange={(e) => setMotorcycleId(e.target.value)}>
            <option value="" className="default-dropdown" disabled >Select a motorcycle to reserve</option>
            {options && options.map((option) => (
              <option key={option.id} value={option.id}>{option.name}</option>
            ))}
          </select>
        : <select disabled value={motorcycleId}>
            <option value={motorcycleId}>{location.state?.name}</option>
          </select>
        }
        <p>{motorcycleId}</p>
        <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input placeholder="Duration" type="number" name="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
        <input placeholder="City" type="text" name="City" value={city} onChange={(e) => setCity(e.target.value)} />
        <div className='btn-group'>
          <button type="submit" name="Submit Reservation">Submit Reservation</button>
        </div>
      </form>
      <div className="error-message">
      <p id="message">{notice}</p>
      </div>
    </div>
  );
};

export default AddReservation;
