/**
 * @format
 */

import 'react-native';
import 'isomorphic-fetch';

import { render } from '@testing-library/react-native';
import React from 'react';

import App from '../App';

jest.mock('../gps/app/Entry', () => 'Entry');

it('renders correctly', () => {
  const { asJSON } = render(<App />);

  expect(asJSON()).toMatchSnapshot();
});
