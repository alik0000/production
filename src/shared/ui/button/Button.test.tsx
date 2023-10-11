import { Button } from 'shared/ui/button/Button'
import { render } from '@testing-library/react'

describe('<Button />', () => {
  test('should render the button', () => {
    const { getByText } = render(<Button>Button test</Button>)
    expect(getByText('Button test')).toBeInTheDocument()
  })
})
