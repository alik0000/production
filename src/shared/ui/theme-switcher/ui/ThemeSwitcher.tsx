import { FC } from 'react'
import s from './ThemeSwitcher.module.scss'
import DarkIcon from 'shared/assets/dark.svg'
import LightIcon from 'shared/assets/light.svg'
import { useTheme } from 'app/providers/theme/lib/useTheme'
import { Theme } from 'app/providers/theme/lib/ThemeContext'

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
        <button className={s.themeBtn} onClick={toggleTheme}>
            { theme === Theme.DARK ? <DarkIcon/> : <LightIcon/> }
        </button>
  )
}
