import type { Meta, StoryObj } from '@storybook/react';

import { Characters } from './Index';

const meta: Meta<typeof Characters> = {
  component: Characters,
};

export default meta;
type Story = StoryObj<typeof Characters>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Characters />,
};