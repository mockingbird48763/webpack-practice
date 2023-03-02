const HtmlWebpackPlugin = require('html-webpack-plugin')

// 獨立插件，可以直接在 webpack 取得
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      // 標識模塊聯邦的名字，將來其他應用依靠這個名字訪問
      name: 'nav',
      // 訪問必須要有一個引用路徑的 URL，這裡配置一個資源
      filename: 'remoteEntry.js',
      // 引用其他應用暴露的組件
      remotes: {},
      // 暴露組件給其他應用使用
      exposes: {
        // 不代表當前應用的某個路徑，而是別人使用時基於這個路徑，拼接 url
        // 值才是本地項目應用的路徑
        './Header': './src/Header.js'
      },
      // 共享的第三方模塊，例如 jquery 或 lodash
      shared: {}
    })
  ]
}