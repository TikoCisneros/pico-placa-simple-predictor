import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateUtils from '@date-io/moment';

export type PickersProviderProps = {
  children?: React.ReactChild | React.ReactChild[];
};

const PickersProvider: React.FC<PickersProviderProps> = ({ children }) => (
  <MuiPickersUtilsProvider utils={DateUtils}>
    {children}
  </MuiPickersUtilsProvider>
);

export default PickersProvider;