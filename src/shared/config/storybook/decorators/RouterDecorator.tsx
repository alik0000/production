import { Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
export const RouterDecorator: Story = (StoryComponent: Story) => {
  return (
        <BrowserRouter>
            <StoryComponent/>
        </BrowserRouter>
  )
}
