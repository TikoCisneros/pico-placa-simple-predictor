import React from 'react';
import { render } from '@testing-library/react';
import PredictorForm from './predictorForm';
import PickersProvider from '../providers/pickersProvider';

describe('PredictorForm test', () => {
  it('should renders correctly', () => {
    const props = {
      licensePlate: '',
      onLicensePlateChange: jest.fn(),
      dateTime: new Date(),
      onDateTimeSelect: jest.fn(),
    };
    const { asFragment } = render(
      <PickersProvider>
        <PredictorForm {...props} />
      </PickersProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
