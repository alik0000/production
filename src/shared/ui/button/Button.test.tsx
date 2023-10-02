import { Button } from 'shared/ui/button/Button'
import { render } from '@testing-library/react'

describe('app btn', () => {
  test('app button test', () => {
    const { getByText } = render(<Button>Button test</Button>)
    expect(getByText('Button test')).toBeInTheDocument()
  })
})
