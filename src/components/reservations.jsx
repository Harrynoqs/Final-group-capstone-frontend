import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../redux/reservations/reservations';
import { fetchUsers } from '../redux/users/fetch';
import { getMotorcycles } from '../redux/motorcycles/motorcycles';
import Reserve from './reserve';

const Reservations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
    dispatch(fetchUsers());
    dispatch(getMotorcycles());
  }, [dispatch]);

  const reservations = useSelector((state) => state.reservation[0]);
  const users = useSelector((state) => state.allUsers[0]);
  const user = users?.find((user) => user.name === JSON.parse(localStorage.getItem('state'))) || 0;
  const userReserves = reservations?.filter((reserve) => reserve.user_id === user?.id);

  if (user && userReserves?.length > 0) {
    return (
      <div className="my-reservations-container">
        <h1 className="text-center text-uppercase">My Reservations</h1>
        <br />
        {userReserves.map((reserve) => (
          <Reserve key={reserve.id} reserve={reserve} />
        ))}
      </div>
    );
  }
  return (
    <div className="my-reservations-container">
      <h1 className="text-center text-uppercase">My Reservations</h1>
      <br />
      <div className="col-lg-12">
        <h3 className="text-center">No reservations yet</h3>
      </div>
    </div>
  );
};

export default Reservations;
