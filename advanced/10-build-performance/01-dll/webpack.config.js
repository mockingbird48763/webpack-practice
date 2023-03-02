const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

// html 想要加入資源，引入的插件
const AddAssertHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, './dll/mainfest.json')
    }),
    new AddAssertHtmlPlugin({
      filepath: path.resolve(__dirname, './dll/jquery.js'),
      publiPath: './'
    })
  ]
}