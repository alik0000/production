import { type RuleSetRule } from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'

export function buildLoaders (option: BuildOptions): RuleSetRule[] {
  const cssLoaders = buildCssLoader(option.isDev)
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }
  const svgLoaders = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{ loader: '@svgr/webpack', options: { icon: true } }]
  }
  const fileLoaders = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  return [
    typescriptLoader,
    cssLoaders,
    svgLoaders,
    fileLoaders
  ]
}
