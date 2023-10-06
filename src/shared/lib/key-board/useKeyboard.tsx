import { KeyboardEvent, useCallback, useEffect, useState } from 'react'

interface Props {
  key: string
  action?: () => void
}
export const useKeyboard = ({ key, action }: Props): boolean => {
  const [pressed, setPressed] = useState(false)
  const match = useCallback((event: KeyboardEvent<HTMLInputElement>) => event.key.toLowerCase() === key.toLowerCase(), [key])

  const onAction = useCallback((event) => {
    if (match(event)) {
      setPressed(true)
      if (action) {
        action()
      }
    }
  }, [action, match])
  useEffect(() => {
    window.addEventListener('keydown', onAction)

    return () => {
      window.removeEventListener('keydown', onAction)
    }
  }, [key, onAction])

  return pressed
}
