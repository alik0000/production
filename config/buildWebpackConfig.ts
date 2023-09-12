import {BuildOptions} from "./types/config";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions) {
    const {mode, paths, isDev, port} = options

    const devtool = isDev ? 'inline-source-map' : undefined
    const devServer = isDev ? buildDevServer(port) : undefined

    return {
        mode,
        entry: paths.entry,
        devtool,
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        output: {
            filename: "[name][contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(paths.html),
        devServer,
    }
}
