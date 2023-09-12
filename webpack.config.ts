import path from "path";
import { Configuration as WebpackConfiguration } from "webpack";
import {BuildEnv, BuildMode, BuildPaths} from "./config/types/config";
import {buildWebpackConfig} from "./config/buildWebpackConfig";

export default (env: BuildEnv) => {
    const mode: BuildMode = env.mode || "development"
    const isDev: boolean = mode === "development"
    const PORT = env.port || 3000

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const config: WebpackConfiguration = buildWebpackConfig({mode, paths, isDev, port: PORT})

    return config
}
