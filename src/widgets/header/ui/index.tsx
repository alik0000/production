import s from "./styles.module.scss";
import {Navigation} from "widgets";
import User from 'widgets/theme-switcher/assets/user.svg'
import { ThemeSwitcher } from "widgets/theme-switcher/ui";

export const Header = () => {

    return (
        <header className={s.header}>
            <Navigation/>
            <ThemeSwitcher/>
            <User className={s.avatar}/>
        </header>
    )
}
