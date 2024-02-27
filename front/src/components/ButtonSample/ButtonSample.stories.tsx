import type { Meta, StoryObj } from '@storybook/react';

import { ButtonSample } from './ButtonSample';

const meta: Meta<typeof ButtonSample> = {
  component: ButtonSample,
};

export default meta;
type Story = StoryObj<typeof ButtonSample>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <ButtonSample />,
};