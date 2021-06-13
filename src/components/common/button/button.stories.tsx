import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from './button';
import { COLOR_ATTRIB } from '../../../common/constants';

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    color: {
      options: [
        COLOR_ATTRIB.default,
        COLOR_ATTRIB.primary,
        COLOR_ATTRIB.secondary,
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
  color: COLOR_ATTRIB.primary,
  label: 'Button',
  contained: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: COLOR_ATTRIB.secondary,
  label: 'Button',
  contained: true,
};
