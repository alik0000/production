import { FC, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from "shared/lib/class-name";
import s from './styles.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}
export const AppBtn:FC<Props> = (props) => {
    const {children, className, ...otherProps} = props

    return(
        <button type="button" className={cn(s.button, {}, [className])} {...otherProps}>
            {children}
        </button>
    )
}
