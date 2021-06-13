import React from 'react';
import { render } from '@testing-library/react';
import Layout from './layout';

describe('Layout test', () => {
  it('should renders correctly', () => {
    const { asFragment } = render(<Layout />);
    expect(asFragment()).toMatchSnapshot();
  });
});