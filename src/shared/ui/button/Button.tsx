import { type FC, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from 'shared/lib/class-name'
import s from './Button.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}
export const Button: FC<Props> = (props) => {
  const { children, className, ...otherProps } = props

  return (
        <button type="button" className={cn(s.clear, {}, [className ?? ''])} {...otherProps}>
            {children}
        </button>
  )
}
