import { render, RenderResult } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import React, { ReactNode, Suspense } from 'react'
import { PageLoader } from 'widgets/pag-loader'
import { ThemeProvider } from 'app/providers/ui/ThemeProvider'
import { StoreProvider } from 'app/providers/store/ui/StoreProvider'
import { SchemaStore } from 'app/providers/store/types/SchemaStore'

interface ComponentRenderOptions {
  route?: string
  initials?: SchemaStore
}
export function ComponentRender (component: ReactNode, options: ComponentRenderOptions): RenderResult {
  const { initials, route = '/' } = options

  return render(
        <StoreProvider initials={initials}>
            <MemoryRouter initialEntries={[route]}>
                <Suspense fallback={<PageLoader/>}>
                    <ThemeProvider>
                        {component}
                    </ThemeProvider>
                </Suspense>
            </MemoryRouter>
        </StoreProvider>
  )
}
