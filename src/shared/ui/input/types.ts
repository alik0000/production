import { InputHTMLAttributes, SVGProps, VFC } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export interface InputProps extends HTMLInputProps {
  className: string
  value: string
  InputIcon: VFC<SVGProps<SVGSVGElement>>
  onChange: (value: string) => void
  errorMessage: string | null
  autofocus: boolean
}
