import path from "path";
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
type BuildMode = 'production' | 'development'

interface BuildEnv {
    mode: BuildMode,
    port: number
}

export default (env: BuildEnv) => {
    const mode = env.mode || "development"
    const PORT = env.port || 3000
    const isDev = mode === 'development'
    const devtool = isDev ? 'inline-source-map' : undefined
    const devServer: WebpackDevServerConfiguration = {
        port: PORT,
        open: true,
    }

    const config: WebpackConfiguration = {
        mode,
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        devtool,
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: "[name][contenthash].js",
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html')
            }),
            new webpack.ProgressPlugin()
        ],
        devServer: isDev ? devServer : undefined,
    }

    return config
}
