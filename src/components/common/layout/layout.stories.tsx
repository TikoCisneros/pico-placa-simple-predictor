import React from 'react';
import { Story, Meta } from '@storybook/react';

import Layout, { LayoutProps } from './layout';

export default {
  title: 'Common/Layout',
  component: Layout,
} as Meta;

const Template: Story<LayoutProps> = () => <Layout />;

export const Default = Template.bind({});