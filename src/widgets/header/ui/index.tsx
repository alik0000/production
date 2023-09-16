import s from "./styles.module.scss";
import {Navigation} from "widgets";
import User from 'widgets/theme-switcher/assets/user.svg'

export const Header = () => {

    return (
        <header className={s.header}>
            <Navigation/>
            <User className={s.avatar}/>
        </header>
    )
}
