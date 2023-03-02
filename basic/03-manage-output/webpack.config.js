const path = require('path')

// 定義插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    // 每次打包時，清除上次打包的內容
    clean: true
  },
  mode: 'none',

  // 插件配置
  plugins: [
    // 使用插件要實例化
    new HtmlWebpackPlugin({
      // 通過對象配置 options
      // 指定模板
      template: './index.html',
      // 輸出檔名
      filename: 'app.html',
      // 指定 script 標籤的位置
      inject: 'body'
    })
  ]
}