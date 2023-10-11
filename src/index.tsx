import { render } from 'react-dom'
import 'app/styles/app.scss'
import { App } from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ui/ThemeProvider'
import 'shared/config/i18n/i18n'
import React, { Suspense } from 'react'
import { PageLoader } from 'widgets/pag-loader'
import { StoreProvider } from 'app/providers/store/ui/StoreProvider'

render(
    <StoreProvider>
        <BrowserRouter>
            <Suspense fallback={<PageLoader/>}>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </Suspense>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root')
)
