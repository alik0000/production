import {FC, useState} from 'react'
import s from './styles.module.scss'
import {AppBtn} from "shared/ui/app-btn";
import {cn} from "shared/lib/class-name";
import { ThemeSwitcher } from "widgets/theme-switcher/ui";

export const Sidebar:FC = () => {

    const [collapsed, setCollapsed] = useState(false)
    const toggleCollapsed = () => {
        setCollapsed(val => !val)
    }

    return(
        <div className={cn(s.sidebar, {[s.collapsed]: collapsed})}>
            <div className="content">
                <AppBtn onClick={toggleCollapsed}>toggle sidebar</AppBtn>
                <h2>Sidebar title</h2>
                <ThemeSwitcher/>
            </div>
        </div>
    )
}
