import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMotorcycle } from '../redux/motorcycles/addSlice';

const AddMotorcycle = () => {
  const [name, setName] = useState('');

  const createNewMotorcycle = (name) => ({
    name,
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const motorcycle = createNewMotorcycle(name);
    dispatch(addMotorcycle(motorcycle)).unwrap();
    setName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" type="text" name="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Add Motorcycle</button>
      </form>
    </div>
  );
};

export default AddMotorcycle;
