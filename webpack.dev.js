const {merge} = require('webpack-merge');
const common = require('./webpack.config.js');
const webpack = require("webpack");

    module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        inline: true,
        contentBase: './',
        historyApiFallback: true,
        watchOptions: {
            ignored: /\/node_modules\/.*/
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            // SERVER_API_URL: JSON.stringify("")
        })
    ]
});