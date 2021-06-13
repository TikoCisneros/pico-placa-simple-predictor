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
  onLicensePlateChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  dateTime: Date | undefined;
  onDateTimeSelect: (value: MaterialUiPickersDate) => void;
  onCanRoadClick?: () => void;
  onSeeRestrictionsClick?: () => void;
};

const PredictorForm: React.FC<PredictorFormProps> = ({
  licensePlate,
  onLicensePlateChange,
  dateTime,
  onDateTimeSelect,
  onCanRoadClick,
  onSeeRestrictionsClick,
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
        placeholder="e.g. AXC0123"
        margin="normal"
        variant="outlined"
        value={licensePlate}
        onChange={onLicensePlateChange}
        fullWidth
      />
      <DateTimePicker
        label="Date and time"
        inputVariant="outlined"
        value={dateTime}
        onChange={onDateTimeSelect}
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
      <Button label="Can I drive?" color={COLOR_ATTRIB.primary} onClick={onCanRoadClick} contained />
      <Button label="Do you know the restrictions yet?" onClick={onSeeRestrictionsClick} />
    </Content>
  </Container>
);

export default PredictorForm;
