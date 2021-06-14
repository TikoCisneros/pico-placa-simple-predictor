import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Main from './main';
import PickersProvider from '../components/providers/pickersProvider';
import { EMPTY_STRING } from '../common/constants';

const setup = () => {
  const utils = render(
    <PickersProvider>
      <Main />
    </PickersProvider>,
  );

  return utils;
};

describe('Main page tests', () => {
  it('show and hide modal restrictions message', () => {
    const { getByText } = setup();

    const seeRestrictionBtn = getByText(/Do you know the restrictions yet?/i);
    expect(seeRestrictionBtn).toBeInTheDocument();

    fireEvent.click(seeRestrictionBtn);
    const modalTitle = getByText('Quito`s Pico y Placa');
    expect(modalTitle).toBeInTheDocument();

    const okBtn = getByText(/ok/i);
    expect(okBtn).toBeInTheDocument();
    fireEvent.click(okBtn);
  });
  it('write a licence place correctly', () => {
    const { getByDisplayValue } = setup();

    const input = getByDisplayValue(EMPTY_STRING) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'ABC0123' } });
    expect(input.value).toBe('ABC0123');
  });
});
