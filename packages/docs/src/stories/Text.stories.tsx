import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@gvp-ui/react'

export default {
  title: 'Typography/Text',
  tags: ['autodocs'],
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum magni necessitatibus modi rem nihil saepe molestiae ab qui, veritatis quis quod autem temporibus. Itaque eos, officiis libero fugiat voluptates molestias?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
