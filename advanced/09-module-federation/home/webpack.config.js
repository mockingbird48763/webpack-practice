const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'home',
      // 可以重名，因為是不同的應用
      filename: 'remoteEntry.js',
      remotes: {
        // key 是本地模塊的 URI 前綴
        // 值是在其他應用模塊聯邦配置的 name
        // 將來可以寫成線上能夠訪問的 url 地址
        nav: 'nav@http://localhost:3003/remoteEntry.js'
      },
      exposes: {
        './HomeList': './src/HomeList.js'
      },
      shared: {}
    })
  ]
}