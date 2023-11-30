import { Story } from '@storybook/react'
import { StoreProvider } from 'app/providers/store/ui/StoreProvider'

export const StoreDecorator: Story = (StoryComponent: Story) => {
  return (
        <StoreProvider>
            <StoryComponent/>
        </StoreProvider>
  )
}
