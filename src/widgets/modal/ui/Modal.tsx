import { FC, useEffect, useRef, useState, useCallback } from 'react'
import s from './Modal.module.scss'
import { cn } from 'shared/lib/class-name'
import { useKeyboard } from 'shared/lib/key-board/useKeyboard'
import { useLockBodyScroll } from 'shared/lib/use-lock-body-scroll/useLockBodyScroll'

interface Props {
  isOpen: boolean
  handleClose: () => void
}
export const Modal: FC<Props> = ({ children, isOpen, handleClose }) => {
  const [isClosing, setIsClosing] = useState(!isOpen)
  const timer = useRef<ReturnType<typeof setTimeout>>()
  useLockBodyScroll(isOpen)

  const onClose = useCallback((): void => {
    if (handleClose) {
      setIsClosing(false)
      timer.current = setTimeout(() => {
        handleClose()
        setIsClosing(true)
      }, 300)
    }
  }, [handleClose])

  useKeyboard({
    key: 'Escape',
    action: onClose
  })

  useEffect(() => {
    return () => {
      clearInterval(timer.current)
    }
  }, [isOpen])
  return (
      <div className={cn(s.modal, { [s.isOpen]: isOpen, [s.isClosing]: !isClosing })} data-testid={'modal'}>
          <div className={s.overlay} onClick={onClose}>
              <div className={s.content}>
                  {children}
              </div>
          </div>
      </div>
  )
}
