const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        publicPath: '/',
        path: path.join(__dirname, "/dist"),
        filename: "index-bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map',
    devServer: {
        hot: true,
        inline: true,
        contentBase: './',
        historyApiFallback: true,
        watchOptions: {
            ignored: /\/node_modules\/.*/
        },
    }
};
