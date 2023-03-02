const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin(),
    new WorkboxPlugin.GenerateSW({
      // 這些選項幫助快速啟用 ServiceWorkers
      clientsClaim: true,
      // 不允許遺留任何「舊的」ServiceWorkers
      skipWaiting: true
    })
  ],
  devServer: {
    // 開發中間件
    devMiddleware: {
      writeToDisk: true
    }
  }
}