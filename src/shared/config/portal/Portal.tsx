import { FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
interface Props {
  selector: string
}
export const Portal: FC<Props> = ({ children, selector }) => {
  const [element, setElement] = useState<Element>()

  useEffect(() => {
    const el = document.querySelector<Element>(selector)
    if (el) {
      setElement(el)
    }
  }, [selector])

  return element ? createPortal(children, element) : null
}
