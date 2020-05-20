import 'react-native';
import React from 'react';
import {render, wait} from '@testing-library/react-native';
import News from '../News';

it('renders correctly', async () => {
  const {asJSON} = render(<News />);
  await wait();

  expect(asJSON()).toMatchSnapshot();
});
