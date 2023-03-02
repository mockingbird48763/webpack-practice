const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    library: {
      name: 'webpackNumbers',
      type: 'umd'
    },
    globalObject: 'globalThis'
  },
  // 外部擴展，減小 bundle
  externals: {
    lodash: {
      // exports.xxx = xxx
      commonjs: 'lodash',
      // module.exports = xxx
      // 推薦
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  }
}