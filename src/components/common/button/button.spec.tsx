import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './button';

describe('Button test', () => {
  const buttonText = 'My Btn';

  it('should presents label text', () => {
    render(<Button label={buttonText} />);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it('should call onClick func', () => {
    const onClickMock = jest.fn();
    render(<Button label={buttonText} onClick={onClickMock} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalled();
  });
});