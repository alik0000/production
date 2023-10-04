import s from './Header.module.scss'
import { Navigation } from 'widgets/navigation'
import User from 'shared/assets/user.svg'
import { FC } from 'react'

export const Header: FC = () => {
  return (
        <header className={s.header}>
            <Navigation/>
            <User className={s.avatar}/>
        </header>
  )
}
