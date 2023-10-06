import { Modal } from 'widgets/modal'
import { render } from '@testing-library/react'

describe('modal test', () => {
  test('test open', () => {
    const { getByTestId } = render(<Modal isOpen={true} handleClose={() => {}}></Modal>)
    expect(getByTestId('modal')).toBeInTheDocument()
  })
})
