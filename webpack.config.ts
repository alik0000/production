import path from 'path'
import { type Configuration as WebpackConfiguration } from 'webpack'
import { type BuildEnv, type BuildMode, type BuildPaths } from './config/build/types/config'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

export default (env: BuildEnv): WebpackConfiguration => {
  const mode: BuildMode = env.mode || 'development'
  const isDev: boolean = mode === 'development'
  const PORT = env.port || 3000

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const config: WebpackConfiguration = buildWebpackConfig({ mode, paths, isDev, port: PORT })

  return config
}
