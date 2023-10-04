import { RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/main'
import { AboutPage } from 'pages/about'
import { NotFound } from 'pages/not-found'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOTFOUND = 'not-found'
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOTFOUND]: '/*'
}

export const routConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage/>
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage/>
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutePaths['not-found'],
    element: <NotFound/>
  }
}
