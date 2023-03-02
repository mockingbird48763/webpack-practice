const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './app.js',
  output: {
    publicPath: '/'
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
    // 設置是否在服務端進行代碼壓縮
    // 使他在傳輸的過程中，可以減少傳輸的這個數據大小
    // 本質是使用 Content-Encoding: gzip
    // 保證從服務器到瀏覽器傳輸的過程中這個文件是壓縮，提高傳輸效率
    // 預設 true
    compress: true,
    // 配置服務端口號
    port: 3000,
    // 添加響應頭，某些場景需要將一些響應頭，通過 http 傳給瀏覽器
    // 會在 Network/localhost 底下
    headers: {
      'X-Access-Token': 'abc123'
    },
    // 代理(反向代理)
    proxy: {
      '/api': 'http://localhost:9000'
    },
    // https: true,
    http2: true,
    historyApiFallback: true,
    host: '0.0.0.0'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}