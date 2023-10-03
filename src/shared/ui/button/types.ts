import {
  ElementType,
  ReactElement,
  ReactChild,
  ReactFragment,
  MouseEvent,
  KeyboardEvent,
  TouchEvent,
  CSSProperties
} from 'react'

export interface AsReactType<T extends ElementType> {
  as?: T | ((props: any) => ReactElement<any, T>)
}

export type InvalidStateColor = 'warning' | 'danger'
export type StateColor = 'success' | InvalidStateColor
export type SemanticColor = StateColor | 'accent' | 'primary' | 'secondary' | 'contrast'
export type ButtonColor = SemanticColor | 'black' | 'white'
export type ButtonSize = 'small' | 'medium' | 'large' | 'relative'
export type ButtonShape = 'pill' | 'brick'

export interface LocalButtonProps {
  /** Manually apply the active styles; this does not affect :active */
  active?: boolean
  children: ReactChild | ReactFragment
  className?: string
  color?: ButtonColor
  disabled?: boolean
  /** Manually apply the focus styles; this does not affect :focus */
  focused?: boolean
  /** Manually apply the hover styles; this does not affect :hover */
  hovered?: boolean
  href?: string
  /** An imitation button looks like a button but doesn't have any functionality */
  imitation?: boolean
  loader?: ReactElement
  loading?: boolean
  onClick?: (event: MouseEvent | KeyboardEvent | TouchEvent) => void
  size?: ButtonSize
  shape?: ButtonShape
  style?: CSSProperties
  type?: 'button' | 'submit'
}

export type ButtonProps<T extends ButtonElementType = 'button'> = AsReactType<T> & LocalButtonProps
export type ButtonElementType = Extract<keyof JSX.IntrinsicElements, 'button' | 'a' | 'div' | 'span'>
