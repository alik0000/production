import { FC, useState } from 'react'
import s from './Sidebar.module.scss'
import { cn } from 'shared/lib/class-name'
import { ThemeSwitcher } from 'shared/ui/theme-switcher/ui/ThemeSwitcher'
import { useTranslation } from 'react-i18next'
import { Navigation } from 'widgets/navigation'
import { Button } from 'shared/ui/button/Button'

type Languages = Record<string, string>
const languages: Languages = {
  en: 'English',
  ru: 'Русский'
}
export const Sidebar: FC = () => {
  const { i18n } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)
  const [visible, setVisible] = useState(true)
  const toggleCollapsed = (): void => {
    setCollapsed(val => !val)
    setVisible(!visible)
  }

  return (
        <div className={cn(s.wrapper, { [s.collapsed]: collapsed })}>
            <aside data-testid={'sidebar'} className={s.sidebar}>
                <header>
                    <button
                        className={cn(s.toggle, { [s.isVisible]: visible })}
                        onClick={toggleCollapsed} data-testid='toggle-btn'
                    >
                    </button>
                </header>
                <Navigation/>
                <footer className={s.footer}>
                    <ThemeSwitcher/>
                    <Button
                        type="button"
                        weight={'outlined'}
                        color={'white'}
                        onClick={() => {
                          void i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
                        }}
                    >
                        {languages[i18n.language]}
                    </Button>
                </footer>
            </aside>
        </div>
  )
}
