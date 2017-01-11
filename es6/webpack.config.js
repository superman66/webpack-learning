const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    index: './index.js',
    content: './blog.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.[name].js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader','css!sass')}
    ]
  },
  plugins: [
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
