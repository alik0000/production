import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from './Input'
import { InputProps } from './types'
import SearchIcon from '../../assets/search.svg'

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    onChange: {
      table: {
        category: 'Actions'
      }
    }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<(args: InputProps) => ReturnType<typeof Input>> = (props) => {
  return (
    <Input
        {...props}
        onChange={action('changed')}
        onFocus={action('focused')}
        onBlur={action('blurred')}
        onSelect={action('selected')}
      />
  )
}

const defaultArgs = {
  type: 'text',
  name: 'username',
  value: '',
  placeholder: 'Введите свое имя',
  errorMessage: null
}

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs
}

export const ErrorState = Template.bind({})
ErrorState.storyName = 'Error'
ErrorState.args = {
  ...defaultArgs,
  placeholder: 'Введите email',
  errorMessage: 'Неверный адрес электронной почты'
}

export const WithIcon = Template.bind({})
WithIcon.storyName = 'Width icon'
WithIcon.args = {
  ...defaultArgs,
  InputIcon: SearchIcon
}
