import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMotorcycle } from '../redux/motorcycles/motorcycles';

const AddMotorcycle = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState(0);
  const [modelYear, setModelYear] = useState(0);
  const [engineType, setEngineType] = useState('');
  const [fuelType, setFuelType] = useState('');

  const createNewMotorcycle = (name) => ({
    name,
    description,
    imageUrl,
    price,
    modelYear,
    engineType,
    fuelType,
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const motorcycle = createNewMotorcycle(name, description, imageUrl, price, modelYear, engineType, fuelType);
    dispatch(addMotorcycle(motorcycle));
    setName('');
    setDescription('');
    setImageUrl('');
    setPrice(0);
    setModelYear(0);
    setEngineType('');
    setFuelType('');
    window.location.href = '/';
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <input className="border-bottom focus:ring-0" placeholder="Name" type="text" name="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
        <input className="border-bottom focus:ring-0" placeholder="Description" type="text" name="Description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
        <input className="border-bottom focus:ring-0" placeholder="Image URL" type="url" name="ImageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required/>
        <label>Price</label>
        <input className="border-bottom focus:ring-transparent" placeholder="Price" type="number" name="Price" value={price} onChange={(e) => setPrice(e.target.value)} required/>
        <label>Model year</label>
        <input className="border-bottom focus:ring-0" placeholder="Model year" type="number" name="Year" value={modelYear} onChange={(e) => setModelYear(e.target.value)} required/>
        <input className="border-bottom focus:ring-0" placeholder="Engine type" type="text" name="EngineType" value={engineType} onChange={(e) => setEngineType(e.target.value)} required/>
        <input className="border-bottom focus:ring-0" placeholder="Fuel type" type="text" name="FuelType" value={fuelType} onChange={(e) => setFuelType(e.target.value)} required/>
        <div className='btn-group'>
          <button type="submit">Add Motorcycle</button>
        </div>
      </form>
    </div>
  );
};

export default AddMotorcycle;
