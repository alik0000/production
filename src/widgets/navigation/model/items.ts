import { VFC, SVGProps } from 'react'
import IconHome from 'shared/assets/home.svg'
import IconAbout from 'shared/assets/about.svg'
import IconProfile from 'shared/assets/profile.svg'

interface ItemProps {
  path: string
  Icon: VFC<SVGProps<SVGSVGElement>>
  text: string
  hidden?: boolean
}
export const Items: ItemProps[] = [
  {
    path: '/',
    Icon: IconHome,
    text: 'Home'
  },
  {
    path: '/about',
    Icon: IconAbout,
    text: 'About'
  },
  {
    path: '/profile',
    Icon: IconProfile,
    text: 'Profile'
  }
]
