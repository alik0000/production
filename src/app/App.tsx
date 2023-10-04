import { Router } from 'pages'
import { FC, Suspense, useContext } from 'react'
import { ThemeContext } from './providers/theme/lib/ThemeContext'
import { Header } from 'widgets/header'
import { Sidebar } from 'widgets/sidebar'
import { cn } from 'shared/lib/class-name'
import { PageLoader } from 'widgets/pag-loader'

export const App: FC = () => {
  const { theme } = useContext(ThemeContext)

  return (
        <div className={cn('app', { [theme]: theme })}>
            <Header/>
            <div className="app-content">
                <Sidebar/>
                <div className="main">
                    <Suspense fallback={<PageLoader />}>
                        <Router/>
                    </Suspense>
                </div>
            </div>
        </div>
  )
}
