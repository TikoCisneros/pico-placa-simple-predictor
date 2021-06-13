import React from 'react';
import ButtonMUI from '@material-ui/core/Button';
import { COLOR_ATTRIB, BUTTON_VARIANTS } from '../../../common/constants';

export type ButtonProps = {
  label: string;
  color?: COLOR_ATTRIB;
  contained?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties,
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  fullWidth,
  onClick,
  contained,
  style,
  color = COLOR_ATTRIB.default,
}) => (
  <ButtonMUI
    style={style}
    color={color}
    fullWidth={fullWidth}
    onClick={onClick}
    variant={contained ? BUTTON_VARIANTS.contained : BUTTON_VARIANTS.default}
    size="large"
  >
    {label}
  </ButtonMUI>
);

export default Button;
