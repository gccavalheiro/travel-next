import { Meta, Story } from '@storybook/react'

import { Button } from 'components'

export default {
  title: 'Shared/Components/Button',
  component: Button,
  argTypes: {
    bg: {
      defaultValue: 'purple',
    },
    size: {
      defaultValue: 'medium',
    },
  },
  args: {
    children: 'Testando o botão',
  },
} as Meta

export const Basic: Story = (args) => (
  <Button {...args}>{args.children} </Button>
)
