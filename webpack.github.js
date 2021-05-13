const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    publicPath: '/RBlogJS',
    filename: '[name].[hash].js',
    path: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    usedExports: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new LodashModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      intl: 'react-intl-universal',
      React: 'react',
      Cookies: 'js-cookie'
    })
  ]
}
