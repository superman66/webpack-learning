const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    // 抽离公共的chunk
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ]
}
