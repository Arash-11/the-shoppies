import React from 'react';
import { render, screen } from '@testing-library/react';
import Nominations from './Nominations';

// renders component without crashing
test('should render <Nominations /> without crashing', () => {
  render(<Nominations />);
});