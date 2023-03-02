const path = require('path')
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  // 實驗性功能，需要設置
  // experiments: {
  //   outputModule: true
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mylib.js',
    library: {
      name: 'mylib',
      type: 'umd'
    },
    // 使用全局 This 代替 self
    globalObject: 'globalThis'
  }
}