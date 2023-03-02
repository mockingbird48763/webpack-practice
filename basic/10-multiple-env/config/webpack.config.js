const { merge } = require('webpack-merge')

// 公共配置
const commonConfig = require('./webpack.config.common')
// 生產配置
const productionConfig = require('./webpack.config.prod')
// 開發配置
const developmentConfig = require('./webpack.config.dev')

module.exports = (env) => {
  switch(true) {
    // 執行命令時，傳入 development 環境變量，那這個屬性應為 true
    case env.development:
      // 導出合併文件
      return merge(commonConfig, developmentConfig)
    case env.production:
      return merge(commonConfig, productionConfig)
    default:
      return new Error('No matching configuration was found')
  }
}