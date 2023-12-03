import { FC } from 'react'
import s from './Navigation.module.scss'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Items } from '../model/items'
import { cn } from 'shared/lib/class-name'

export const Navigation: FC = () => {
  const { t } = useTranslation()
  return (
        <nav className={s.nav}>
            {Items.map(({ path, Icon, text, hidden }) => (
                <NavLink to={path} key={path} className={cn('', { [s.hidden]: !!hidden })}>
                    {<Icon/>}
                    {t(text)}
                </NavLink>
            ))}
        </nav>
  )
}
