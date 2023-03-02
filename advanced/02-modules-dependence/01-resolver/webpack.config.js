const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/app.js',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    // 會按照順序去識別
    // 這樣會嘗試優先請求 json 文件
    extensions: ['.json', '.js', '.vue']
  }
}