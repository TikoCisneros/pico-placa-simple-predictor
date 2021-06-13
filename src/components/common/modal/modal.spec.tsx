/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render } from '@testing-library/react';
import Modal from './modal';

export const defaultProps = {
  open: true,
  title: 'Are you ready?',
  message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  onClose: () => {},
};

export const data = [
  'Fusce rutrum tellus at libero ultrices pulvinar.',
  'Ut viverra consequat quam, nec porttitor nunc sodales sit amet.',
  'Sed egestas molestie sem.',
];

describe('Layout test', () => {
  it('should renders correctly without items', () => {
    const { asFragment } = render(<Modal {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should renders correctly with items', () => {
    const props = {
      ...defaultProps,
      items: data,
    };
    const { asFragment } = render(<Modal {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});