module.exports = {
  output: {
    filename: 'scripts/[name].bundle.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
}