import React from 'react';
import { render } from '@testing-library/react';
import Nominations from './Nominations';

test('should render <Nominations /> without crashing', () => {
  render(<Nominations />);
});