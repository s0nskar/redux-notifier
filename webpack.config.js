var webpack = require('webpack')

module.exports = {
  entry: './src/notifier.js',
  output: {
    path: './dist',
    filename: 'notifier.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              screw_ie8: true,
              warnings: false
          }
      }),
      new webpack.BannerPlugin('Github Repo: https://github.com/s0nskar/redux-notifier/')
  ]
}