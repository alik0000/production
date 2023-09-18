import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/main'
import { AboutPage } from 'pages/about'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about'
}

export const routConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage/>
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage/>
  }
}
