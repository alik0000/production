import React, { ReactElement, useRef, useEffect, useState, memo } from 'react'
import { cn } from 'shared/lib/class-name'
import s from './Input.module.scss'
import { Props } from '../input/types'

export const Input = memo((props: Partial<Props>): ReactElement => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    InputIcon,
    errorMessage,
    name,
    ...otherProps
  } = props
  const ref = useRef<HTMLInputElement>(null)
  const [, setIsFocused] = useState(false)
  const [, setCaretPosition] = useState(0)

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autofocus])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  const onBlur = (): void => {
    setIsFocused(false)
  }

  const onFocus = (): void => {
    setIsFocused(true)
  }

  const onSelect = (e: any): void => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }

  return (
      <div className={cn(s.wrapper, { [s.hasError]: !!errorMessage }, [className ?? ''])}>
        <div className={s.container}>
          {InputIcon && <InputIcon className={s.svg}/>}
          <input
              className={s.input}
              ref={ref}
              type={type}
              data-testid={name}
              onChange={onChangeHandler}
              placeholder={placeholder}
              onFocus={onFocus}
              onBlur={onBlur}
              onSelect={onSelect}
              {...otherProps}
          />
        </div>
        <span className={s.errorMessage} data-testid="errors">{errorMessage}</span>
      </div>
  )
})
