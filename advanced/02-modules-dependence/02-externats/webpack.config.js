const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './app.js',
  plugins: [
    new HtmlWebpackPlugin()
  ],
  externals: {
    // key 必須與 app.js 引入的包名一樣
    // 一但通過 script 標籤加載 jquery
    // jquery 會在 window 對象暴露一個 jQuery 別名 $
    // 索引 0，連結
    // 索引 1，暴露對象
    jquery: ['https://cdn.bootcdn.net/ajax/libs/jquery/3.6.3/jquery.js',
    '$']
  },
  // 鏈接要以什麼方式載入
  // 這裡選擇 script 標籤方式
  externalsType: 'script'
}