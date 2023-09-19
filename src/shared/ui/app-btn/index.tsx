import { type FC, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from 'shared/lib/class-name'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}
export const AppBtn: FC<Props> = (props) => {
  const { children, className, ...otherProps } = props

  return (
        <button type="button" className={cn('', {}, [className ?? ''])} {...otherProps}>
            {children}
        </button>
  )
}
