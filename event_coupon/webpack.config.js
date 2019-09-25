const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const compiler = require('vue-template-compiler');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry:{
    app: path.join(__dirname, 'main.js'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader','css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
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
  ],
  output:{
    path: path.join(__dirname, 'dist'),
    filename:'[name].js',
  },
  optimization: {},
  resolve : {
    modules: ['node_modules'],
    extensions: ['.js','.json', '.css', '.vue']
  }
};