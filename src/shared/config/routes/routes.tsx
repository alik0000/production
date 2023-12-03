import { RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/main'
import { AboutPage } from 'pages/about'
import { NotFound } from 'pages/not-found'
import { LoginPage } from 'pages/login'
import { ProfilePage } from 'pages/profile'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOTFOUND = 'not-found',
  LOGIN = 'login'
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.PROFILE]: '/profile',
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
  [AppRoutes.LOGIN]: {
    path: RoutePaths.login,
    element: <LoginPage/>
  },
  [AppRoutes.PROFILE]: {
    path: RoutePaths.profile,
    element: <ProfilePage/>
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutePaths['not-found'],
    element: <NotFound/>
  }
}
