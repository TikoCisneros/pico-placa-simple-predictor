import React, { useState } from 'react';
import { DateTimePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

import { canItBeOnRoad } from '../common/util';

const Main: React.FC = () => {
  const [value, setValue] = useState<Date | undefined>(new Date());

  const handleDateChange = (newValue: MaterialUiPickersDate) => setValue(newValue?.toDate());

  const canIt = canItBeOnRoad('01', value!);

  return (
    <div style={{ margin: 10 }}>
      <DateTimePicker
        label="DateTimePicker"
        inputVariant="outlined"
        value={value}
        onChange={handleDateChange}
        minDate={new Date()}
      />
      <br />
      <br />
      <strong>{canIt ? 'CAN' : 'CAN NOT'}</strong>
    </div>
  );
};

export default Main;
