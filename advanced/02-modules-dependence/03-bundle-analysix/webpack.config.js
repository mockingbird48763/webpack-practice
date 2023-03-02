const HtmlWebpackPlugin = require('html-webpack-plugin')
// 導出插件
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  mode: 'development',
  entry: {
    // 多入口配置
    app: './src/app.js',
    app2: './src/app2.js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    // 實例化
    new BundleAnalyzerPlugin()
  ]
}