import { FC, type ReactNode } from 'react'
import { cn } from 'shared/lib/class-name'
import { LinkProps, Link } from 'react-router-dom'

interface AppLinkProps extends LinkProps {
  children: ReactNode
}
export const AppLink: FC<AppLinkProps> = (props) => {
  const { children, className, to, ...otherProps } = props

  return (
        <Link to={to} className={cn(className ?? '')} {...otherProps}>
            {children}
        </Link>
  )
}
