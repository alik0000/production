import s from './PageLoader.module.scss'
import { FC } from 'react'
export const PageLoader: FC = () => {
  return (
        <div className={s.PageLoader}>
            <div className={s.PageLoaderWrapper}/>
        </div>
  )
}
