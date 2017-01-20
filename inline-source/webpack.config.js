const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  entry: {
    app: './entry.js',
    vendor: ['jquery', 'lodash']
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader','css!sass')}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inlineSource: '.(css)$'
    }),
    new HtmlWebpackInlineSourcePlugin(),
    // 抽离公共的chunk
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new  ExtractTextPlugin('[name].css')
  ]
}
