import {
  ElementType,
  ReactElement,
  ReactChild,
  ReactFragment,
  MouseEvent,
  KeyboardEvent,
  TouchEvent,
  CSSProperties,
  ComponentPropsWithoutRef
} from 'react'

export interface AsReactType<T extends ElementType> {
  as?: T | ((props: any) => ReactElement<any, T>)
}

// see https://github.com/microsoft/TypeScript/issues/36860 for css, sx removal notes
export type MergeElementPropsWithoutRef<T extends ElementType, P extends object> = Omit<
ComponentPropsWithoutRef<T>,
keyof P | 'css' | 'sx'
> &
P

export type ButtonAlignment = 'left' | 'right' | 'center';
export type InvalidStateColor = 'warning' | 'danger'
export type StateColor = 'success' | InvalidStateColor
export type ButtonWeight = 'solid' | 'shaded' | 'outlined' | 'ghost' | 'inline'
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
  align?: ButtonAlignment
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
  weight?: ButtonWeight
  type?: 'button' | 'submit'
}

export type ButtonProps<T extends ButtonElementType = 'button'> = AsReactType<T> &
MergeElementPropsWithoutRef<T, LocalButtonProps>
export type ButtonElementType = Extract<keyof JSX.IntrinsicElements, 'button' | 'a' | 'div' | 'span'>
