import { useEffect } from 'react'

const { style } = document.body
export const useLockBodyScroll = (flag: boolean): void => {
  useEffect(() => {
    if (flag) {
      style.overflow = 'hidden'
      style.paddingRight = 'var(--scrollbar-compensation)'
    } else {
      style.overflow = ''
      style.paddingRight = ''
    }
  }, [flag])
}
