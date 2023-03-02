const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')


const toml = require('toml')
const yaml = require('yaml')
const json5 = require('json5')

module.exports = (env) => {
  // { WEBPACK_BUNDLE: true, WEBPACK_BUILD: true, production: true, goal: 'local' }
  // production: true 表示用戶設置了一個 env production
  console.log(env)
  return {
    entry: {
      index: './src/index.js',
      another: './src/another-module.js'
    },
    output: {
      // 增加目錄
      filename: 'scripts/[name].[contenthash].bundle.js',
      path: path.resolve(__dirname, './dist'),
      clean: true,
      assetModuleFilename: 'images/[contenthash].[ext]',
      publicPath: 'http://localhost:8080/'
    },
    // 使用傳遞進來的 env 設置
    mode: env.production ? 'production' : 'development',
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
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
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
      // 這裡做配置，開箱即用的 terser 插件需要單獨配置
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin()
      ],
      // 如果加入一個靜態資源，還是得打開
      splitChunks: {
        // 緩存組
        cacheGroups: {
          vendor: {
            // 第三方文件的特點，都在 node_modules 文件裡面
            test: /[\\/]node_modules[\\/]/,
            // 文件名前綴
            name: 'vendors',
            // 對哪些 chunks 做處理，all 表示全部
            chunks: 'all'
          }
        }
      }
    }
  }
}