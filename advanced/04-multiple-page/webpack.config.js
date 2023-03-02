const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  plugins: [
    // 頁面 1
    new HtmlWebpackPlugin({
      title: '多頁面應用',
      template: './index.html',
      inject: 'body',
      // 不設置 filename 都是默認使用 index.html
      // 與模板無關
      filename: 'chanel1/index.html',
      chunks: ['main', 'lodash'],
      publicPath: 'http://www.b.com/'
    }),
    // 頁面 2
    new HtmlWebpackPlugin({
      template: './index2.html',
      inject: 'body',
      filename: 'chanel2/index2.html',
      chunks: ['main2', 'lodash'],
      publicPath: 'http://www.a.com/'
    })
  ],
  entry: {
    main: {
      import: ['./src/app.js', './src/app2.js'],
      dependOn: 'lodash',
      // 設定資料夾路徑
      filename: 'chanel1/[name].js'
    },
    main2: {
      import: ['./src/app3.js'],
      dependOn: 'lodash',
      filename: 'chanel2/[name].js'
    },
    lodash: {
      import: 'lodash',
      filename: 'common/[name].js'
    }
  },
  output: {
    clean: true
  }
}