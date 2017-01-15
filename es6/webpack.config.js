const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './index.js'
  },
  output: {
    path: __dirname + '/dist',  // webpack build 路径
    filename: 'bundle.[hash].js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader','css!sass')}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      }
    }),
    new  ExtractTextPlugin('[name].css')
  ]
}
