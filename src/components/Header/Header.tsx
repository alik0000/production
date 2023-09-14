import {NavLink} from "react-router-dom";
import s from "./header.module.scss";
import {useTheme} from "../../theme/useTheme";

export default function Header() {
    const {theme, toggleTheme} = useTheme()

    return (
        <header className={s.header}>
            <div className={s.logo}></div>
            <nav className={s.nav}>
                <NavLink to="/" className={({ isActive }) =>(isActive ? s.active : "")}>
                    Main
                </NavLink>
                <NavLink to="/about" className={({ isActive }) =>(isActive ? s.active : "")}>
                    About
                </NavLink>
            </nav>

            <button className={s.button} onClick={toggleTheme}>
                {theme}
            </button>
        </header>
    )
}
