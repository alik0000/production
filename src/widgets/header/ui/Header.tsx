import s from './Header.module.scss'
import User from 'shared/assets/user.svg'
import { FC } from 'react'

export const Header: FC = () => {
  return (
        <header className={s.header}>
            <User className={s.avatar}/>
        </header>
  )
}
