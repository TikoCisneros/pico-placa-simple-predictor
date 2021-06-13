import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from './button';
import { BUTTON_COLORS } from '../../../common/constants';

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    color: {
      options: [
        BUTTON_COLORS.default,
        BUTTON_COLORS.primary,
        BUTTON_COLORS.secondary,
      ],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  contained: true,
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  label: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  color: BUTTON_COLORS.primary,
  label: 'Button',
  contained: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: BUTTON_COLORS.secondary,
  label: 'Button',
  contained: true,
};
