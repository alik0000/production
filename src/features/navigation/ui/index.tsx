import s from './styles.module.scss'
import {NavLink} from "react-router-dom";
import { ROUTE_CONSTANTS } from "shared/config";

export const Navigation = () => {
    return(
        <nav className={s.nav}>
            <NavLink to={ROUTE_CONSTANTS.MAIN} className={({ isActive }) =>(isActive ? s.active : "")}>
                Main
            </NavLink>
            <NavLink to={ROUTE_CONSTANTS.ABOUT} className={({ isActive }) =>(isActive ? s.active : "")}>
                About
            </NavLink>
        </nav>
    )
}
