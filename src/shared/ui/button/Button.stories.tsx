import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ButtonProps } from 'shared/ui/button/types'
import { Button } from 'shared/ui/button/Button'

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
    <Button {...args}>
      {children}
    </Button>
)

const defaultArgs = {
  active: false,
  as: 'button' as ButtonProps['as'],
  children: 'Click me',
  color: 'primary' as ButtonProps['color'],
  contrast: false,
  disabled: false,
  focused: false,
  fullWidth: false,
  hovered: false,
  imitation: false,
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
PrimaryColor.storyName = 'Color: Primary'
PrimaryColor.args = {
  ...defaultArgs,
  color: 'primary'
}

export const SuccessColor = Template.bind({})
SuccessColor.storyName = 'Color: Success'
SuccessColor.args = {
  ...defaultArgs,
  color: 'success'
}

export const SecondaryColor = Template.bind({})
SecondaryColor.storyName = 'Color: secondary'
SecondaryColor.args = {
  ...defaultArgs,
  color: 'secondary'
}

export const WarningColor = Template.bind({})
WarningColor.storyName = 'Color: Warning'
WarningColor.args = {
  ...defaultArgs,
  color: 'warning'
}

export const DangerColor = Template.bind({})
DangerColor.storyName = 'Color: Danger'
DangerColor.args = {
  ...defaultArgs,
  color: 'danger'
}
