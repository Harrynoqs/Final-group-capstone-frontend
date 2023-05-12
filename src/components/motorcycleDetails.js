import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { getSingleMotorcycle } from '../redux/motorcycles/details';

export const MotorcycleDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const id = location.state?.id;

  useEffect(() => {
    dispatch(getSingleMotorcycle(id));
  }, [dispatch, id]);

  const details = useSelector((state) => state.motorcycleDetails);
  const imageSectionStyles = {
    backgroundImage: `url("${details.image_url}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div>
      <section style={imageSectionStyles} />
      <section>
        <h5>{details.name}</h5>
        <p>{details.description}</p>
        <ul>
          <li>
            <span>Model Year</span>
            <span>{details.model_year}</span>
          </li>
          <li>
            <span>Fuel Type</span>
            <span>{details.fuel_type}</span>
          </li>
          <li>
            <span>Finance Fee</span>
            <span>
              $
              {details.price}
            </span>
          </li>
          <li>
            <span>Total Amount Payable</span>
            <span>
              $
              {details.price}
              {' '}
              *
              {Math.floor(Math.random() * (10 - 2) + 10)}
            </span>
          </li>
        </ul>
        <div>
          <Link to="/">discover more models</Link>
        </div>
        <div>
          <button type="button">Reserve</button>
        </div>
      </section>
    </div>
  );
};

export default MotorcycleDetails;
