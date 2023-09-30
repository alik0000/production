import { type FC } from 'react'
import s from './styles.module.scss'
import { Button } from 'shared/ui/button/Button'
import DarkIcon from 'widgets/theme-switcher/assets/dark.svg'
import LightIcon from 'widgets/theme-switcher/assets/light.svg'
import { useTheme } from 'app/providers/theme/lib/useTheme'
import { Theme } from 'app/providers/theme/lib/ThemeContext'

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
        <Button className={s.themeBtn} onClick={toggleTheme}>
            { theme === Theme.DARK ? <DarkIcon/> : <LightIcon/> }
        </Button>
  )
}
