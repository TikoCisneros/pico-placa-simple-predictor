import React from 'react';
import { render } from '@testing-library/react';
import PredictorForm from './predictorForm';
import PickersProvider from '../providers/pickersProvider';

describe('PredictorForm test', () => {
  it('should renders correctly', () => {
    const userDate = '2020-06-12T13:17:41.707Z';

    const props = {
      licensePlate: '',
      onLicensePlateChange: jest.fn(),
      dateTime: new Date(userDate),
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
