import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@gvp-ui/react'

export default {
  title: 'Data display/Avatar',
  tags: ['autodocs'],
  component: Avatar,
  args: {
    src: 'https://github.com/guivicentep.png',
    alt: 'Guilherme Vicente',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
