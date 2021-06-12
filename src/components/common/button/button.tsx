import React from 'react';
import ButtonMUI from '@material-ui/core/Button';
import { BUTTON_COLORS } from '../../../common/constants';

export type ButtonProps = {
  label: string;
  color?: BUTTON_COLORS;
  fullWidth?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  fullWidth,
  onClick,
  color = BUTTON_COLORS.default,
}) => (
  <ButtonMUI
    color={color}
    variant="contained"
    fullWidth={fullWidth}
    onClick={onClick}
  >
    {label}
  </ButtonMUI>
);

export default Button;
