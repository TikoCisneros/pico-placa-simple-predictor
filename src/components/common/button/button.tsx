import React from 'react';
import ButtonMUI from '@material-ui/core/Button';
import { BUTTON_COLORS, BUTTON_VARIANTS } from '../../../common/constants';

export type ButtonProps = {
  label: string;
  color?: BUTTON_COLORS;
  contained?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  fullWidth,
  onClick,
  contained,
  color = BUTTON_COLORS.default,
}) => (
  <ButtonMUI
    color={color}
    fullWidth={fullWidth}
    onClick={onClick}
    variant={contained ? BUTTON_VARIANTS.contained : BUTTON_VARIANTS.default}
  >
    {label}
  </ButtonMUI>
);

export default Button;
