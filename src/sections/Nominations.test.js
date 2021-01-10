import React from 'react';
import { render, screen } from '@testing-library/react';
import Nominations from './Nominations';

describe('<Nominations />', () => {
  test('should render <Nominations /> without crashing', () => {
    render(<Nominations />);
  });

  test('should display "My Nominations" text', () => {
    render(<Nominations />);
    const myNominationsNode = screen.getByText(/my nominations/i);
    expect(myNominationsNode).toBeDefined();
  });
});