const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry:{
    app:'./main.js',
  },
  output:{
    path:'',
    filename:'[name].js',
    publicPath: './dist/js',
  },
  module:{
    rules:[{
      
    }]
  },
  plugins: [],
  optimization: {},
  resolve : {
    modules: ['node_modules'],
    extensions: ['.js','.json', '.css']
  }
};
