const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const toml = require('toml')
const yaml = require('yaml')
const json5 = require('json5')

module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  output: {
    // [name] 可以拿到 entry 入口 chunk 的 key 名
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
    assetModuleFilename: 'images/[contenthash].[ext]'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'app.html',
      inject: 'body'
    }),
    // 實例化
    new MiniCssExtractPlugin({
      // 指定 css 文件的路徑和名稱
      filename: 'styles/[contenthash].css'
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
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 * 1024
          }
        }
      },
      {
        test: /\.(css|less)$/,
        // 打算單獨抽離 css 文件，所以原本的 style-loader 就無效了
        // 使用新的 loader 來代替
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        // 這個類型可以載入任何資源
        type: 'asset/resource'
      },
      {
        test: /\.(csv|tsv)$/,
        use: 'csv-loader'
      },
      {
        test: /\.xml$/,
        use: 'xml-loader'
      },
      {
        test: /\.toml$/,
        // 導出 json 類型
        type: 'json',
        // 使用 toml 解析
        parser: {
          parse: toml.parse
        }
      },
      {
        test: /\.yaml$/,
        // 導出 json 類型
        type: 'json',
        // 使用 yaml 解析
        parser: {
          parse: yaml.parse
        }
      },
      {
        test: /\.json5$/,
        // 導出 json 類型
        type: 'json',
        // 使用 json5 解析
        parser: {
          parse: json5.parse
        }
      },
      {
        test: /\.js$/,
        // 排除 node_modules 裡面的代碼
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // 配置參數
          options: {
            // 預設
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-transform-runtime']
            ]
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ],
    // 如果加入一個靜態資源，還是得打開
    splitChunks: {
      chunks: 'all'
    }
  }
}