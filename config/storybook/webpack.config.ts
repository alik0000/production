import { Configuration, RuleSetRule } from 'webpack'
import { BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: Configuration }): Configuration => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  config?.resolve?.modules?.push(paths.src)
  config?.resolve?.extensions?.push('.tsx', '.ts')

  // @ts-expect-error: Object is possibly 'null'
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (String(rule.test).includes('svg')) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })

  config?.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })
  config?.module?.rules?.push(buildCssLoader(true))

  return config
}
