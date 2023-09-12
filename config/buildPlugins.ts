import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export function buildPlugins(path: string): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: path,
        }),
        new webpack.ProgressPlugin()
    ]
}
