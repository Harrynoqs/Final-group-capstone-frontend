import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMotorcycles, removeSingleMotorcycle, clearMotorcycles } from "../redux/motorcycles/motorcycles";

const DeleteBike = () => {
  const dispatch = useDispatch();
  const [deletedItems, setDeletedItems] = useState([]);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    dispatch(clearMotorcycles());
    dispatch(getMotorcycles());
  }, [dispatch]);

  const motorcycles = useSelector((state) => state.motorcycle);
  const memoizedMotorcycles = useMemo(() => motorcycles, [motorcycles]);

  const handleDelete = (id) => {
    dispatch(removeSingleMotorcycle(id));
    setDeletedItems([...deletedItems, itemId]);
    setNotice(`Item ${id} removed`);
  }
  
  return (
    <div className="flex flex-col delete-bikes">
    <div>
      <h3 className="delete-heading">Delete a motorcycle:</h3>
      <p>{notice}</p>
    </div>
    <div className="grid grid-cols-3 gap-6 delete-bikes-container">
    {memoizedMotorcycles.map((item, index) => (
        <div key={index} className="bg-green-200 p-4 text-center flex flex-row bikes-delete-info">
          <div className="flex flex-col gap-2 text-left">
            <h5 className="text-xl font-semi-bold">{item.name}</h5>
            <p className="text-lg font-light">{item.modelYear}</p>
          </div>
          <div className="justify-center flex flex-col cursor-pointer">
            {deletedItems.includes(item.id) ? (
              <p className="text-red-500">Item deleted</p>
            ) : (
              <i className="fa-solid fa-trash fa-xl" onClick={() => handleDelete(item.id)} />
            )}
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default DeleteBike;