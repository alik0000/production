import {
  ReactElement,
  MouseEvent,
  KeyboardEvent,
  TouchEvent,
  HTMLProps,
  forwardRef,
  Ref,
  createElement,
  HTMLAttributes,
  Fragment
} from 'react'
import { cn } from 'shared/lib/class-name'
import s from 'shared/ui/button/Button.module.scss'
import { ButtonElementType, ButtonProps } from 'shared/ui/button/types'

export function ButtonBase<T extends ButtonElementType = 'button'> (
  {
    active = false,
    as,
    children,
    className,
    color,
    disabled = false,
    focused = false,
    hovered = false,
    href,
    imitation = false,
    loader,
    loading = false,
    onClick,
    size = 'medium',
    type = 'button',
    ...props
  }: ButtonProps<T>
): ReactElement {
  // if an href is passed we should ignore the `as` and force to an anchor
  const element = href ? 'a' : imitation ? 'div' : 'button'

  const handleClick = (event: MouseEvent | KeyboardEvent | TouchEvent): void => {
    if (!disabled && !loading) {
      onClick?.(event)
    }
  }
  const mod = {
    'is-active': active,
    'is-disabled': disabled,
    'is-focused': focused,
    'is-hovered': hovered,
    'is-loading': loading
  }

  const elementProps = (() => {
    if (imitation) return {}

    switch (element) {
      case 'a': {
        const elementProps = {} as any as HTMLProps<HTMLAnchorElement>
        elementProps.onKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
          if (disabled && event.key === 'Enter') {
            event.preventDefault()
          }
        }
        elementProps.href = href
        return elementProps
      }

      case 'button': {
        const elementProps = {} as any as HTMLProps<HTMLButtonElement>
        elementProps.type = type
        elementProps.disabled = disabled
        return elementProps
      }

      default: {
        const elementProps = {} as any as HTMLProps<HTMLElement>
        elementProps.role = 'button'
        elementProps.tabIndex = 0

        elementProps.onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
          if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault()
            event.stopPropagation()

            handleClick(event)
          }
        }
        return elementProps
      }
    }
  })()

  return (
    createElement(
      element,
      {
        className: cn(s.button, mod, [s[`button__${color}`], s[`button__${size}`]]),
        onClick: handleClick,
        ...({ elementProps, ...props as HTMLAttributes<T> })
      },
          <Fragment>
            <span>{children}</span>
            {loading && <span>{loader}</span>}
          </Fragment>
    )
  )
}

export const Button = forwardRef(ButtonBase) as <T extends ButtonElementType = 'button'>(
  p: ButtonProps<T> & { ref?: Ref<HTMLElementTagNameMap[T]> },
) => ReactElement<T>
