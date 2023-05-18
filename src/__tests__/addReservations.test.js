import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import AddReservation from '../components/addReservation';

describe('AddReservation', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <AddReservation />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
