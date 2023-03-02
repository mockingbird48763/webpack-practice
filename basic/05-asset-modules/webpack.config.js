const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
    // 資源模塊的文件名和路徑
    // contenthash 根據文件的內容生成 hash 字符串
    // ext 原資源的副檔名
    assetModuleFilename: 'images/[contenthash].[ext]'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'app.html',
      inject: 'body'
    })
  ],
  devServer: {
    static: './dist'
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset/resource',
        // 定義 rules 時透過一個 generator 屬性，自定義文件的路徑和名字
        generator: {
          filename: 'images/[contenthash].[ext]'
        }
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
      },
      {
        test: /\.txt$/,
        type: 'asset/source'
      },
      {
        test: /\.jpg$/,
        type: 'asset',
        // 解析器
        parser: {
          dataUrlCondition: {
            // 設定臨界值 4M
            maxSize: 4 * 1024 * 1024
          }
        }
      }
    ]
  }
}