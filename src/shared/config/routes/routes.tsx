import { RouteProps } from 'react-router-dom'
import { Main } from 'pages/main'
import { About } from 'pages/about'
import { NotFound } from 'pages/not-found'
import { Login } from 'pages/login'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOTFOUND = 'not-found',
  LOGIN = 'login'
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.NOTFOUND]: '/*'
}

export const routConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <Main/>
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <About/>
  },
  [AppRoutes.LOGIN]: {
    path: RoutePaths.login,
    element: <Login/>
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutePaths['not-found'],
    element: <NotFound/>
  }
}
