import s from './styles.module.scss'
import {NavLink} from "react-router-dom";
import { AppRoutes, RoutePaths } from "shared/config";

export const Navigation = () => {
    return(
        <nav className={s.nav}>
            <NavLink to={RoutePaths[AppRoutes.MAIN]} className={({ isActive }) =>(isActive ? s.active : "")}>
                Main
            </NavLink>
            <NavLink to={RoutePaths[AppRoutes.ABOUT]} className={({ isActive }) =>(isActive ? s.active : "")}>
                About
            </NavLink>
        </nav>
    )
}
