import React, { useState } from 'react';
import { DateTimePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

import './App.css';
import logo from './logo.svg';

const App: React.FC = () => {
  const [value, setValue] = useState<Date | undefined>(new Date());

  const handleDateChange = (newValue: MaterialUiPickersDate) => setValue(newValue?.toDate());

  console.log(value);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <DateTimePicker
          label="DateTimePicker"
          inputVariant="outlined"
          value={value}
          onChange={handleDateChange}
        />
      </header>
    </div>
  );
};

export default App;
