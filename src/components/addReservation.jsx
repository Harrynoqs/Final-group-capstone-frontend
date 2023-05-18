import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '../redux/reservations/reservations';
import { fetchUsers } from '../redux/users/fetch';
import { getMotorcycles, clearMotorcycles } from '../redux/motorcycles/motorcycles';

const AddReservation = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const selectedBikeId = location.state?.id;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  const [date, setDate] = useState(undefined);
  const [city, setCity] = useState('');
  const [duration, setDuration] = useState(undefined);
  const [motorcycleId, setMotorcycleId] = useState(selectedBikeId ? selectedBikeId : '');
  const [user, setUser] = useState('');
  const [notice, setNotice] = useState('');

  const users = useSelector((state) => state.allUsers[0]);

  useEffect(() => {
    setUser(users?.find((user) => user.name === JSON.parse(localStorage.getItem('state'))) || 0)
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
      dispatch(clearMotorcycles())
      dispatch(getMotorcycles());
    }
  }, [dispatch]);

  useEffect(() => {
    setOptions(bikeOptions);
  }, [motorcycles]);
  

  console.log(user.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (motorcycleId === '') {
      setNotice('Error trying to submit request. Please try again.')
    }
    else {
      const reservation = createNewReservation(date, city, duration, motorcycleId, user.id);
      dispatch(addReservation(reservation));
      setDate(null);
      setCity('');
      setTimeout(() => {
        window.location.href = '/';
      }, 200);
    }
  };

  const backgroundStyle = {
    backgroundImage: `linear-gradient(
      rgba(33, 196, 123, 0.60), 
      rgba(33, 196, 123, 0.60)
    ),url("https://images.pexels.com/photos/2964/italian-vehicle-driving-motor-scooter.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
  }

  return (
    <div className='reservation-form' style={backgroundStyle}>
    <div className='form-container'>
      <form onSubmit={handleSubmit} className="reservations-form">
        {options && options.length > 0 ? 
          <select value={motorcycleId} className="focus:ring-0" onChange={(e) => setMotorcycleId(e.target.value)}>
            <option value="" className="default-dropdown" disabled >Select a motorcycle to reserve</option>
            {options && options.map((option) => (
              <option key={option.id} value={option.id}>{option.name}</option>
            ))}
          </select>
        : <select disabled value={motorcycleId}>
            <option value={motorcycleId}>{location.state?.name}</option>
          </select>
        }
        <input type="date" name="date" value={date} className="focus:ring-0 placeholder-white" onChange={(e) => setDate(e.target.value)} required/>
        <input placeholder="Duration" type="number" name="Duration" className="focus:ring-0 placeholder-black" value={duration} onChange={(e) => setDuration(e.target.value)} required/>
        <input placeholder="City" type="text" name="City" value={city} className="focus:ring-0 placeholder-black" onChange={(e) => setCity(e.target.value)} required/>
        <div className="error-message">
          <p id="message">{notice}</p>
        </div>
        <div className='btn-group'>
          <button type="submit" name="Submit Reservation">Book Now</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddReservation;
