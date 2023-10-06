import s from './Navigation.module.scss'
import { NavLink } from 'react-router-dom'
import { AppRoutes, RoutePaths } from 'shared/config/routes'
import { FC } from 'react'

export const Navigation: FC = () => {
  return (
        <nav className={s.nav}>
            <NavLink to={RoutePaths[AppRoutes.MAIN]} className={({ isActive }) => (isActive ? s.active : '')}>
                Main
            </NavLink>
            <NavLink to={RoutePaths[AppRoutes.ABOUT]} className={({ isActive }) => (isActive ? s.active : '')}>
                About
            </NavLink>
        </nav>
  )
}
