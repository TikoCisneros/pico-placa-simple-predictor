/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Story, Meta } from '@storybook/react';

import Modal, { ModalProps } from './modal';

export default {
  title: 'Common/Modal',
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
  title: 'Are you ready?',
  message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  onClose: () => {},
};

export const WithItems = Template.bind({});
WithItems.args = {
  open: true,
  title: 'Are you ready?',
  message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  items: [
    'Fusce rutrum tellus at libero ultrices pulvinar.',
    'Ut viverra consequat quam, nec porttitor nunc sodales sit amet.',
    'Sed egestas molestie sem.',
  ],
  onClose: () => {},
};