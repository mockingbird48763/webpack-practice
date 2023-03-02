module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          // 通常用於耗時 loader 因為它自身也要開銷
          // 定義在 babel-loader 之前(右至左|下至上)
          {
            loader: 'thread-loader',
            options: {
              // cpu 數量
              workers: 2
            }
          }
        ]
      }
    ]
  }
}