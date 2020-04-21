import React from 'react';
import Card from './Card';
import { render } from '@testing-library/react'

// Smoke Test!
it("renders without crashing", function() {
  render(<Card />);
});

//Snapshot Test
it("should match snapshot", function() {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});

