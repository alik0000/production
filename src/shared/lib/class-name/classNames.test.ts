import { cn } from 'shared/lib/class-name/index'
describe('className', () => {
  test('test class', () => {
    expect(cn('class1')).toBe('class1 ')
  })
  test('test class on mod', () => {
    expect(cn('class1', { hovered: true })).toBe('class1 hovered ')
  })
  test('test classes', () => {
    expect(cn('class1', { hovered: true }, ['active', 'visible']))
      .toBe('class1 hovered active visible')
  })
})
