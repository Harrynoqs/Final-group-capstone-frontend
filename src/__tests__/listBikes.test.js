import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import BikeSwiper from '../components/bikeSwiper';
import store from '../redux/configureStore';

describe('BikeSwiper', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <BikeSwiper />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
