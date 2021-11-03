import { Meta, Story } from '@storybook/react'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
} as Meta

export const Basic: Story = (args) => <Menu {...args} />
