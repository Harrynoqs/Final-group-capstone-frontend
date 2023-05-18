import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Reservations from '../components/reservations';

describe('Reservations', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Reservations />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
