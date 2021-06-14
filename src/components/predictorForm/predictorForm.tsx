import React from 'react';
import {
  TextField, Typography,
  IconButton, InputAdornment,
} from '@material-ui/core';
import { DateTimePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import CalendarIcon from '@material-ui/icons/CalendarTodayTwoTone';

import {
  Container, Content,
  Logo, Button,
} from './predictorForm.styles';
import { COLOR_ATTRIB } from '../../common/constants';

import logo from '../../assets/trafficJam.svg';

export type PredictorFormProps = {
  licensePlate: string;
  onLicensePlateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dateTime: Date | undefined;
  minDate?: Date | undefined;
  onDateTimeSelect: (value: MaterialUiPickersDate) => void;
  onCanDriveClick?: () => void;
  onSeeRestrictionsClick?: () => void;
  onLicensePlateFocus?: () => void;
  error?: boolean;
};

const PredictorForm: React.FC<PredictorFormProps> = ({
  licensePlate,
  onLicensePlateChange,
  dateTime,
  minDate,
  onDateTimeSelect,
  onCanDriveClick,
  onSeeRestrictionsClick,
  onLicensePlateFocus,
  error,
}) => (
  <Container>
    <Content>
      <Logo src={logo} alt="logo" />
      <Typography variant="h4" color={COLOR_ATTRIB.primary} gutterBottom>
        Car circulation predictor
      </Typography>
      <TextField
        label="License plate"
        InputLabelProps={{ shrink: true }}
        inputProps={{ maxLength: 7 }}
        placeholder="e.g. AXC0123"
        margin="normal"
        variant="outlined"
        value={licensePlate}
        onChange={onLicensePlateChange}
        onFocus={onLicensePlateFocus}
        error={error}
        helperText={error && 'Please check correct license place format e.g. IBH2670'}
        fullWidth
      />
      <DateTimePicker
        label="Date and time"
        inputVariant="outlined"
        value={dateTime}
        onChange={onDateTimeSelect}
        minDate={minDate}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <CalendarIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />
      <Button label="Can I drive?" color={COLOR_ATTRIB.primary} onClick={onCanDriveClick} contained />
      <Button label="Do you know the restrictions yet?" onClick={onSeeRestrictionsClick} />
    </Content>
  </Container>
);

export default PredictorForm;
