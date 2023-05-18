import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import AddMotorcycle from '../components/addMotorcycle';

describe('Add bike', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<AddMotorcycle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
