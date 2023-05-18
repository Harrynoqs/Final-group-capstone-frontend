import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Reserve = ({
  reserve,
}) => {
  const motorcycles = useSelector((state) => state.motorcycle);
  const reservedBike = motorcycles.find((motorcycle) => motorcycle.id === reserve.twowheeler_id);

  if (reservedBike) {
    return (
      <div key={reserve.id} className="flex flex-row reserve">
        <div className="flex flex-col reserve-left">
          <h3>{reservedBike.name}</h3>
          <h3>{reservedBike.modelYear}</h3>
        </div>
        <div className="flex flex-col reserve-right">
          <h4>
            {' '}
            <b>Date:</b>
            {' '}
            <span className="ml-1">{reserve.date_of_reservation}</span>
          </h4>
          <h4>
            {' '}
            <b>City:</b>
            {' '}
            <span className="ml-1">{reserve.city}</span>
          </h4>
          <h4>
            <b>Duration of test drive:</b>
            {' '}
            <span className="ml-1">
              {reserve.duration_of_test_drive}
              {' '}
              minutes.
            </span>
          </h4>
        </div>
      </div>
    );
  }
  return (
    <div />
  );
};

Reserve.propTypes = { reserve: PropTypes.shape({}).isRequired };

export default Reserve;
