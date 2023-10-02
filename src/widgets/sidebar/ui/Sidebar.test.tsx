import { Sidebar } from './Sidebar'
import { fireEvent, screen } from '@testing-library/react'
import { RenderWithTranslation } from 'shared/lib/renderWithTranslation/RenderWithTranslation'
describe('sidebar test', () => {
  test('test component ', () => {
    RenderWithTranslation(<Sidebar/>)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('button test', () => {
    RenderWithTranslation(<Sidebar/>)
    const toggle = screen.getByTestId('toggle-btn')
    fireEvent.click(toggle)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('collapsed')
  })
})
