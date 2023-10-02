import { FC, useState } from 'react'
import s from 'widgets/sidebar/ui/styles.module.scss'
import { Button } from 'shared/ui/button/Button'
import { cn } from 'shared/lib/class-name'
import { ThemeSwitcher } from 'widgets/theme-switcher/ui'
import { useTranslation } from 'react-i18next'

type Languages = Record<string, string>
const languages: Languages = {
  en: 'English',
  ru: 'Русский'
}
export const Sidebar: FC = () => {
  const { i18n } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapsed = (): void => {
    setCollapsed(val => !val)
  }

  return (
        <div className={cn(s.sidebar, { [s.collapsed]: collapsed })} data-testid={'sidebar'}>
            <div className="content">
                <Button onClick={toggleCollapsed} data-testid='toggle-btn'>toggle sidebar</Button>
                <h2>Sidebar title</h2>
                <ThemeSwitcher/>
                <button
                    type="button"
                    onClick={() => {
                      void i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
                    }}
                >
                    {languages[i18n.language]}
                </button>
            </div>
        </div>
  )
}
