import { AppBtn } from 'shared/ui/app-btn/index'
import { render } from '@testing-library/react'

describe('app btn', () => {
  test('app button test', () => {
    const { getByText } = render(<AppBtn>Button test</AppBtn>)
    expect(getByText('Button test')).toBeInTheDocument()
  })
})
