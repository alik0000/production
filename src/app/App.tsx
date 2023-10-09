import { Router } from 'pages'
import { FC, Suspense, useContext, useState } from 'react'
import { ThemeContext } from './providers/theme/lib/ThemeContext'
import { Header } from 'widgets/header'
import { Sidebar } from 'widgets/sidebar'
import { cn } from 'shared/lib/class-name'
import { PageLoader } from 'widgets/pag-loader'
import { Modal } from 'widgets/modal'
import { Portal } from 'shared/config/portal/Portal'
import { useLockBodyScroll } from 'shared/lib/use-lock-body-scroll/useLockBodyScroll'

export const App: FC = () => {
  const { theme } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  useLockBodyScroll(false)

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
            <Portal selector={'#modal'}>
                <Modal isOpen={isOpen} handleClose={() => { setIsOpen(false) }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam asperiores debitis dolorem expedita quasi quidem sit tenetur totam!
                    Deserunt dolore dolores fugiat maiores nobis quos repudiandae? Hic labore quam totam!
                </Modal>
            </Portal>
        </div>
  )
}
