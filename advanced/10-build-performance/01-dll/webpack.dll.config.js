const { dirname } = require('path')
const path = require('path')
const webpakc = require('webpack')

module.exports = {
  mode: 'production',
  // 配置 node_modules 安裝第三方的包
  entry: {
    jquery: ['jquery']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dll'),
    library: '[name]_[hash]'
  },
  plugins: [
    new webpakc.DllPlugin({
      // 等於 library 名稱
      name: '[name]_[hash]',
      path: path.resolve(__dirname, 'dll/mainfest.json')
    })
  ]
}