const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const compiler = require('vue-template-compiler');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    entry: {
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    'vue-style-loader', 'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            fallback: 'responsive-loader',
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '가위바위보',
            filename: 'rockScissorsPaper.html',
            template: './index.html',
            hash: true,
        })
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
    },
    optimization: {

    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.css', '.vue']
    }
};