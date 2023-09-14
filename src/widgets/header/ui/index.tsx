import {useTheme} from "app/providers/theme/lib/useTheme";
import s from "./styles.module.scss";
import { Navigation } from "features";

export const Header = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <header className={s.header}>
            <div className={s.logo}></div>
            <Navigation/>
            <button className={s.button} onClick={toggleTheme}>
                {theme}
            </button>
        </header>
    )
}
