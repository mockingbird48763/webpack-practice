const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin(),
    // 該插件在 webpack 裡面
    new webpack.ProvidePlugin({
      // 告訴 webpack 遇到 _，將 lodash 包引入，並提供給需要的模塊
      // 現在 lodash 在全局裡
      _: 'lodash'
    })
  ],
  module: {
    rules: [
      {
        // 測試 index.js 文件
        test: require.resolve('./src/index.js'),
        // 讓包的 this 指向 window
        use: 'imports-loader?wrapper=window'
      },
      {
        test: require.resolve('./src/globals.js'),
        // 通過 Type=CJS 模塊的方式
        // exports 定義導出的變量 module.exports = file
        // multiple 表示可以導出 key&value　形式
        // multiple|helpers.parse|parse = module.exports = { 'helpers.parse': parse }
        use: 'exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse'
      }
    ]
  }
}