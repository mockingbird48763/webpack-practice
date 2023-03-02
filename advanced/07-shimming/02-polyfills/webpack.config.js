module.exports = {
  mode: 'production',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                // 包含大多數的程序轉化，一個 babel 插件的集合
                '@babel/preset-env',
                {
                  // 添加墊片的目標，可以添加到 package.json
                  targets: [
                    // 瀏覽器的最後一個版本
                    'last 1 version',
                    // 並且使用率大於 1%
                    '> 1%'
                  ],
                  useBuiltIns: 'usage',
                  // 定義 corejs 版本
                  corejs: 3
                }
              ]
            ]
          }
        }
      }
    ]
  }
}