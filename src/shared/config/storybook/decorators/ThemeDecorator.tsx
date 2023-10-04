import { Story } from '@storybook/react'
import { Theme } from 'app/providers/theme/lib/ThemeContext'
import { cn } from 'shared/lib/class-name'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  return (
        <div className={cn('app', { [theme]: theme })}>
            <StoryComponent/>
        </div>
  )
}
