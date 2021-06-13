/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Story, Meta } from '@storybook/react';

import PredictorForm, { PredictorFormProps } from './predictorForm';
import PickersProvider from '../providers/pickersProvider';

export default {
  title: 'Components/PredictorForm',
  component: PredictorForm,
} as Meta;

const Template: Story<PredictorFormProps> = (args) => (
  <PickersProvider>
    <PredictorForm {...args} />
  </PickersProvider>
);

export const Default = Template.bind({});
Default.args = {
  licensePlate: '',
  onLicensePlateChange: () => {},
  dateTime: new Date(),
  onDateTimeSelect: () => {},
};
