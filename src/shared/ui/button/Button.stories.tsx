import { action } from '@storybook/addon-actions'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ButtonProps } from './types'
import { Button } from './Button'
import SpinnerIcon from '../../assets/spinner.svg'

export default {
  title: 'shared/Button',
  component: Button,

  argTypes: {
    align: {
      control: {
        type: 'inline-radio'
      },
      table: {
        category: 'Appearance'
      }
    },
    color: {
      control: {
        type: 'radio'
      },
      table: {
        category: 'Appearance'
      }
    },
    loader: {
      control: {
        disable: true
      },
      table: {
        category: 'Appearance'
      }
    },
    shape: {
      control: {
        type: 'inline-radio'
      },
      table: {
        category: 'Appearance'
      }
    },
    size: {
      control: {
        type: 'inline-radio'
      },
      table: {
        category: 'Appearance'
      }
    },
    weight: {
      control: {
        type: 'radio'
      },
      table: {
        category: 'Appearance'
      }
    },

    active: {
      table: {
        category: 'State'
      }
    },
    disabled: {
      table: {
        category: 'State'
      }
    },
    focused: {
      table: {
        category: 'State'
      }
    },
    hovered: {
      table: {
        category: 'State'
      }
    },
    loading: {
      table: {
        category: 'State'
      }
    },
    type: {
      control: {
        type: 'inline-radio'
      },
      table: {
        category: 'State'
      }
    },

    onClick: {
      table: {
        category: 'Actions'
      }
    },

    as: {
      control: {
        disable: true
      },
      table: {
        category: 'Uncommon'
      }
    },
    className: {
      control: {
        disable: true
      },
      table: {
        category: 'Uncommon'
      }
    },
    contrast: {
      table: {
        category: 'Uncommon'
      }
    },
    fullWidth: {
      table: {
        category: 'Uncommon'
      }
    },
    imitation: {
      table: {
        category: 'Uncommon'
      }
    },
    style: {
      table: {
        category: 'Uncommon'
      }
    },

    href: {
      table: {
        category: 'Link',
        disable: true
      }
    },
    target: {
      table: {
        category: 'Link',
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<(args: ButtonProps) =>
ReturnType<typeof Button>> = ({ children, size, ...args }) => (
    <Button {...args} size={size}
            loader={<SpinnerIcon/>}
            onClick={action('clicked')}>
      {children}
    </Button>
)

const defaultArgs = {
  active: false,
  as: 'button' as ButtonProps['as'],
  children: 'button',
  contrast: false,
  disabled: false,
  focused: false,
  fullWidth: false,
  hovered: false,
  imitation: false,
  shape: 'pill',
  loading: false,
  noHeight: false,
  noPadding: false,
  size: 'medium' as ButtonProps['size'],
  type: 'button' as ButtonProps['type']
}

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs
}

export const PrimaryColor = Template.bind({})
PrimaryColor.storyName = 'Primary'
PrimaryColor.args = {
  ...defaultArgs,
  color: 'primary'
}

export const SuccessColor = Template.bind({})
SuccessColor.storyName = 'Success'
SuccessColor.args = {
  ...defaultArgs,
  color: 'success'
}

export const WarningColor = Template.bind({})
WarningColor.storyName = 'Warning'
WarningColor.args = {
  ...defaultArgs,
  color: 'warning'
}

export const DangerColor = Template.bind({})
DangerColor.storyName = 'Danger'
DangerColor.args = {
  ...defaultArgs,
  color: 'danger'
}
export const ContrastColor = Template.bind({})
ContrastColor.storyName = 'Contrast'
ContrastColor.args = {
  ...defaultArgs,
  color: 'contrast'
}

export const SecondaryColor = Template.bind({})
SecondaryColor.storyName = 'Secondary'
SecondaryColor.args = {
  ...defaultArgs,
  color: 'secondary'
}

export const Link = (args: ButtonProps<'a'>): ReturnType<typeof Button> => <Button<'a'> {...args} />
Link.args = {
  ...defaultArgs,
  as: 'a',
  href: 'https://www.google.com/',
  target: '_blank'
}

Link.argTypes = {
  href: { table: { disable: false } },
  target: { table: { disable: false } }
}

export const Imitation = (args: ButtonProps<'div'>): ReturnType<typeof Button> => <Button<'div'> {...args} />
Imitation.args = {
  ...defaultArgs,
  as: 'div',
  imitation: true
}

export const LoadingState = Template.bind({})
LoadingState.storyName = 'Loading'
LoadingState.args = {
  ...defaultArgs,
  loading: true,
  children: ''
}
